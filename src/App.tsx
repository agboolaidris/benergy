import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
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

const Layout = () => {
  return (
    <main>
      <section className="py-2 sticky top-0 z-50 px-4 sm:px-0">
        <Wrapper className="bg-brand-gray rounded sm:!px-4 xl:!px-4">
          <Navbar />
        </Wrapper>
      </section>

      <section>
        <Outlet />

        <section className="py-16 sm:py-32 bg-brand-gray ">
          <CustomReview />
        </section>
        <section className="py-16 sm:py-32">
          <GallerySection />
        </section>

        <section
          id="contact"
          className="aspect-[1443/581]  py-16 sm:py-32  relative flex justify-center items-center"
        >
          <img
            src="/contact.svg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <Wrapper className="relative z-10 w-full !max-w-3xl bg-brand-purple">
            <ContactSection />
          </Wrapper>
        </section>
      </section>
      <section className="py-16 sm:py-32" id="contact">
        <Wrapper>
          <Footer />
        </Wrapper>
      </section>
      <ToastContainer />
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
