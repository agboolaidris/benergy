import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { Wrapper } from "./components/Wrapper";
import { Navbar } from "./components/Navbar";
import { ContactSection } from "./modules/Contact";
import { ServicePage } from "./pages/ServicePage";
import { AboutPage } from "./pages/AboutPage";
import { ToastContainer } from "./components/ToastContainer";
import { CustomReview } from "./modules/CustomReview";
import { ScrollToTop } from "./components/ScrollToTop";
import { GallerySection } from "./modules/Gallery";
import { WhatsAppBubble } from "./components/WhatsAppBubble";
import { Reveal } from "./components/Reveal";

const PageTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const Layout = () => {
  return (
    <main>
      <section className="py-3 sticky top-0 z-50 px-4 sm:px-6">
        <Wrapper className="sm:!px-4 xl:!px-4">
          <Navbar />
        </Wrapper>
      </section>

      <section>
        <PageTransition />

        <section className="relative overflow-hidden bg-brand-secondary py-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-grid-line bg-grid-fade" />
          <Reveal>
            <CustomReview />
          </Reveal>
        </section>
        <section className="py-16 sm:py-32">
          <Reveal>
            <GallerySection />
          </Reveal>
        </section>

        <section
          id="contact"
          className="relative flex justify-center items-center overflow-hidden bg-brand-secondary py-16 sm:py-32"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-line bg-grid-fade" />
          <img
            src="/contact.svg"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-secondary/80 via-brand-secondary/60 to-brand-secondary" />
          <Wrapper className="relative z-10 w-full !max-w-3xl">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-12">
                <ContactSection />
              </div>
            </Reveal>
          </Wrapper>
        </section>
      </section>
      <section className="py-16 sm:py-32 bg-brand-black">
        <Wrapper>
          <Footer />
        </Wrapper>
      </section>
      <ToastContainer />
      <WhatsAppBubble />
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
