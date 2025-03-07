import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BodyText, Title } from "./components/Text";
import { Wrapper } from "./components/Wrapper";
import { ContactSection } from "./modules/Contact";
import { CustomReview } from "./modules/CustomReview";
import { HeroSection } from "./modules/Hero";
import { MissionSection } from "./modules/Mission";
import { ServicesSection } from "./modules/services";

function App() {
  return (
    <main>
      <section className="py-2 sticky top-0 z-50 px-4 sm:px-0">
        <Wrapper className="bg-brand-gray rounded sm:!px-4 xl:!px-4">
          <Navbar />
        </Wrapper>
      </section>

      <section>
        <section className="relative overflow-hidden" id="home">
          <img
            src="/hero.svg"
            className="w-full h-full absolute inset-0 object-cover"
          />
          <Wrapper className="relative z-10 py-20 sm:py-40">
            <HeroSection />
          </Wrapper>
        </section>
        <section className="bg-brand-gray py-16 sm:py-32" id="mission">
          <Wrapper>
            <MissionSection />
          </Wrapper>
        </section>

        <section
          className="py-16 sm:py-32 relative bg-brand-secondary"
          id="about"
        >
          <img
            src="/about.svg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Wrapper className="relative aspect-video flex items-center ">
            <div className="max-w-3xl">
              <BodyText className=" !text-white font-semibold text-xl">
                About
              </BodyText>
              <Title className="!text-white !font-medium mt-4 sm:mt-8">
                Benargy Engineering Solutions delivers innovative and
                sustainable engineering solutions to empower industries.
              </Title>
            </div>
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32 bg-black" id="services">
          <Wrapper>
            <ServicesSection />
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32 bg-brand-gray" id="careers">
          <CustomReview />=
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
      <section className="py- sm:py-16" id="contact">
        <Wrapper>
          <Footer />
        </Wrapper>
      </section>
    </main>
  );
}

export default App;
