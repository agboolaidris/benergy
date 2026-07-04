import { Helmet } from "react-helmet-async";
import { BodyText, Eyebrow, SubTitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { MissionSection } from "../modules/Mission";
import { CtaBannerSection } from "../modules/CtaBanner";
import { Reveal } from "../components/Reveal";
import { CalendarIcon } from "../icons/Calendar";
import { CheckCircleIcon } from "../icons/CheckCircle";
import { MapPinIcon } from "../icons/MapPin";
import { UsersIcon } from "../icons/Users";

const values = [
  {
    icon: CheckCircleIcon,
    title: "Certified Engineers",
    description:
      "Every installation is handled by trained, certified engineers and technicians - not casual labour.",
  },
  {
    icon: CalendarIcon,
    title: "Proven Track Record",
    description:
      "10+ years delivering reliable solar, security, and electrical solutions across Nigeria.",
  },
  {
    icon: UsersIcon,
    title: "Client-First Support",
    description:
      "We stay reachable before, during, and after every project - support doesn't end at installation.",
  },
  {
    icon: MapPinIcon,
    title: "Nationwide Reach",
    description:
      "Serving homes and businesses in Lagos, Abuja, Port Harcourt, and beyond.",
  },
];

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Benargy Engineering Solutions</title>
        <meta
          name="description"
          content="Learn about Benargy Engineering Solutions - 10+ years delivering solar, security, smart home, and electrical solutions to homes and businesses across Nigeria."
        />
        <link rel="canonical" href="https://benargy.com/about" />
        <meta
          property="og:title"
          content="About Us | Benargy Engineering Solutions"
        />
        <meta
          property="og:description"
          content="10+ years delivering solar, security, smart home automation, and electrical solutions to homes and businesses across Nigeria."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://benargy.com/about" />
        <meta property="og:image" content="https://benargy.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Benargy Engineering Solutions"
        />
        <meta
          name="twitter:description"
          content="10+ years delivering solar, security, smart home automation, and electrical solutions across Nigeria."
        />
        <meta name="twitter:image" content="https://benargy.com/logo.png" />
      </Helmet>
      <section>
        <section
          className="py-16 sm:py-24 relative overflow-hidden bg-brand-secondary"
          id="about"
        >
          <img
            src="/about.svg"
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="pointer-events-none absolute inset-0 bg-grid-line bg-grid-fade" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-secondary/60 via-brand-secondary/70 to-brand-secondary" />
          <Wrapper className="relative aspect-video flex items-center ">
            <div className="max-w-5xl">
              <Eyebrow className="mb-4">About</Eyebrow>
              <SubTitle as="h1" className="!text-white !font-medium">
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
              <Reveal className="lg:col-span-2">
                <SubTitle className="!text-2xl sm:text-5xl font-bold ">
                  A Growth Story
                </SubTitle>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-3 ">
                <SubTitle className="">
                  About Benargy Engineering Solutions
                </SubTitle>
                <div className="mt-3 space-y-2 sm:mt-10 sm:space-y-5">
                  <BodyText>
                    At Benargy Engineering Solutions, we’re shaping the
                    future - one smart solution at a time. As a forward-thinking
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
                    We don’t just provide services - we build lasting partnerships
                    grounded in trust, performance, and the pursuit of a
                    smarter, greener future.
                  </BodyText>
                  <BodyText>Let’s power progress - together.</BodyText>
                </div>
              </Reveal>
            </div>
          </Wrapper>
        </section>
        <section className="bg-brand-gray py-16 sm:py-32">
          <Wrapper>
            <div className="mb-8 sm:mb-16 mx-auto max-w-3xl text-center">
              <Eyebrow className="mb-4 justify-center">Why Choose Us</Eyebrow>
              <SubTitle className="text-center">
                What Sets Benargy Apart
              </SubTitle>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, description }, idx) => (
                <Reveal
                  key={title}
                  delay={idx * 0.1}
                  className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm shadow-brand-black/5 sm:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <SubTitle className="!text-lg mt-4">{title}</SubTitle>
                  <BodyText className="mt-2 text-sm">{description}</BodyText>
                </Reveal>
              ))}
            </div>
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32" id="mission">
          <Wrapper>
            <MissionSection />
          </Wrapper>
        </section>

        <section className="py-16 sm:py-24">
          <Wrapper>
            <Reveal>
              <CtaBannerSection
                title="Let's Power Your Next Project"
                description="Tell us what you need - solar, security, automation, or electrical - and our team will help you plan it out."
              />
            </Reveal>
          </Wrapper>
        </section>
      </section>
    </>
  );
};
