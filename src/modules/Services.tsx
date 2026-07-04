import { BodyText, Eyebrow, SubTitle } from "../components/Text";
import { Reveal } from "../components/Reveal";

const services = [
  {
    image: "/services/solar-installation.jpeg",
    number: "01",
    title: "Solar/Inverter Installation",
    description:
      "Make the switch to clean, sustainable energy with our renewable energy services. We offer solar power installation to reduce your carbon footprint while saving you money on energy bills. Our experienced team ensures the highest efficiency and performance, making your transition to renewable energy seamless and cost-effective.",
  },
  {
    image: "/services/camera-installation.jpeg",
    number: "02",
    title: "Security Camera & Surveillance",
    description:
      "Protect your property with advanced security camera systems tailored to your needs. Whether for residential, commercial, or industrial spaces, our security solutions provide 24/7 surveillance, live monitoring, and remote access.",
  },
  {
    image: "/services/automation-installation.jpeg",
    number: "03",
    title: "Smart Home Automation",
    description:
      "Transform your home into a smart, connected haven. Control lighting, temperature, security, and entertainment - all at your fingertips, for more convenience and energy savings.",
  },
  {
    image: "/services/electrical-installation.jpeg",
    number: "04",
    title: "Electrical Installation Services",
    description:
      "From new constructions to renovations, our electrical services keep your space safe and functional - expert wiring, panel upgrades, lighting, earthing systems and lightning arrestors.",
  },
];

const CornerFrame = ({ number }: { number: string }) => (
  <>
    <span className="pointer-events-none absolute right-4 bottom-4 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-white/60" />
    <span className="pointer-events-none absolute left-4 top-4 rounded bg-black/40 px-2 py-1 font-mono text-xs tracking-widest text-white/90 backdrop-blur-sm">
      SRV.{number}
    </span>
  </>
);

export const ServicesSection = ({
  showTitle = true,
}: {
  showTitle?: boolean;
}) => {
  const [featured, ...rest] = services;

  return (
    <div>
      {showTitle && (
        <div className="mb-8 sm:mb-16 text-center max-w-4xl mx-auto">
          <Eyebrow className="mb-4 justify-center">What We Offer</Eyebrow>
          <SubTitle className="text-center">Our Services</SubTitle>
        </div>
      )}

      {/* Featured service */}
      <Reveal className="group overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm shadow-brand-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-black/10">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <img
              src={featured.image}
              alt={`${featured.title} - Benargy Engineering Solutions`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r" />
            <CornerFrame number={featured.number} />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <SubTitle>{featured.title}</SubTitle>
            <BodyText className="mt-4">{featured.description}</BodyText>
          </div>
        </div>
      </Reveal>

      {/* Supporting services */}
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {rest.map(({ image, number, title, description }, idx) => (
          <Reveal
            key={number}
            delay={idx * 0.1}
            className="group overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm shadow-brand-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-black/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image}
                alt={`${title} - Benargy Engineering Solutions`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <CornerFrame number={number} />
            </div>
            <div className="p-6">
              <SubTitle className="!text-xl">{title}</SubTitle>
              <BodyText className="mt-2 text-sm">{description}</BodyText>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
