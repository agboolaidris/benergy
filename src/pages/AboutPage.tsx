import { Helmet } from "react-helmet-async";
import { BodyText, SubTitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { MissionSection } from "../modules/Mission";

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About us: Benargy Engineering Solutions</title>
        <meta
          name="description"
          content="Benargy Engineering Solutions delivers innovative and
                sustainable engineering solutions to empower to empower homes,
                businesses and industries"
        />
        <meta
          property="og:title"
          content="About: Benargy Engineering Solutions"
        />
      </Helmet>
      <section>
        <section
          className="py-8 sm:py-16 relative bg-brand-secondary"
          id="about"
        >
          <img
            src="/about.svg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Wrapper className="relative aspect-video flex items-center ">
            <div className="max-w-5xl">
              <BodyText className=" !text-brand-primary font-semibold text-xl">
                About
              </BodyText>
              <SubTitle className="!text-white !font-medium mt-4 sm:mt-8">
                Benargy Engineering Solutions delivers innovative and
                sustainable engineering solutions to empower to empower homes,
                businesses and industries
              </SubTitle>
            </div>
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32">
          <Wrapper>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-32">
              <div className="lg:col-span-2">
                <SubTitle className="!text-2xl sm:text-5xl !text-brand-earth font-bold ">
                  A Growth Story
                </SubTitle>
              </div>
              <div className="lg:col-span-3 ">
                <SubTitle className="">
                  About Benargy Engineering Solutions
                </SubTitle>
                <div className="mt-3 space-y-2 sm:mt-10 sm:space-y-5">
                  <BodyText>
                    At Benargy Engineering Solutions, we’re shaping the
                    future—one smart solution at a time. As a forward-thinking
                    engineering company, we specialize in renewable energy,
                    smart home automation, security systems and surveillance,
                    and comprehensive electrical installations. Our desire is to
                    empower homes and businesses with sustainable, secure, and
                    seamlessly connected technologies.
                  </BodyText>
                  <BodyText>
                    Founded on a passion for innovation and a commitment to
                    quality, our team brings together experienced engineers,
                    certified technicians, and dedicated support staff who work
                    tirelessly to exceed client expectations. Whether it's
                    installing cutting-edge solar systems, designing custom
                    smart home setups, or ensuring safety with reliable
                    surveillance solutions, we deliver with precision,
                    reliability, and care.
                  </BodyText>
                  <BodyText>
                    We don’t just provide services—we build lasting partnerships
                    grounded in trust, performance, and the pursuit of a
                    smarter, greener future.
                  </BodyText>
                  <BodyText>Let’s power progress—together.</BodyText>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
        <section className="bg-brand-gray py-16 sm:py-32" id="mission">
          <Wrapper>
            <MissionSection />
          </Wrapper>
        </section>
      </section>
    </>
  );
};
