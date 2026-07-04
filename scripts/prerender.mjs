// Snapshots each route to static HTML after `vite build` so crawlers that
// don't execute JS (social link-preview bots, plain HTTP fetchers) see real
// content instead of the empty SPA shell. Real browsers still get the same
// client-rendered app - React just re-renders over this markup on load.
import { preview } from "vite";
import puppeteer from "puppeteer";
import fs from "node:fs/promises";
import path from "node:path";

const routes = ["/", "/about", "/services"];

async function main() {
  const server = await preview({ preview: { port: 4173 } });
  const base = server.resolvedUrls?.local[0];
  if (!base) throw new Error("Could not resolve preview server URL");

  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.goto(new URL(route.slice(1), base).toString(), {
        waitUntil: "networkidle0",
      });
      const html = await page.content();
      await page.close();

      const outDir =
        route === "/" ? "dist" : path.join("dist", route.slice(1));
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
      console.log(`Prerendered ${route} -> ${outDir}/index.html`);
    }
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
