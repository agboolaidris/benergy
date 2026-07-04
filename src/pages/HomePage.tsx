import { useState } from "react";
import { BodyText, Eyebrow, Title } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { HeroSection } from "../modules/Hero";
import { Helmet } from "react-helmet-async";

import { ServicesSection } from "../modules/Services";
import { BookServiceModal } from "../modules/BookService";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { CalendarIcon } from "../icons/Calendar";
import { CheckCircleIcon } from "../icons/CheckCircle";
import { UsersIcon } from "../icons/Users";

const differentiators = [
  "10+ years of hands-on engineering experience",
  "Certified engineers & technicians on every job",
  "Nationwide coverage across Nigeria",
  "End-to-end support, from design to maintenance",
];

const stats = [
  {
    icon: CalendarIcon,
    from: 0,
    to: 10,
    label: "Years of Excellence in Service",
  },
  {
    icon: CheckCircleIcon,
    from: 650,
    to: 700,
    label: "Completed Projects",
  },
  {
    icon: UsersIcon,
    from: 180,
    to: 200,
    label: "Happy Customers",
  },
];

export const HomePage = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          Benargy Engineering Solutions | Solar, Security & Electrical
          Services in Nigeria
        </title>
        <meta
          name="description"
          content="Benargy Engineering Solutions delivers innovative and sustainable engineering solutions across Nigeria. We provide solar and inverter installation, security cameras, smart home automation, and electrical installation services in Lagos, Abuja, Port Harcourt, and nationwide."
        />
        <link rel="canonical" href="https://benargy.com/" />
        <meta
          property="og:title"
          content="Benargy Engineering Solutions | Solar, Security & Electrical Services in Nigeria"
        />
        <meta
          property="og:description"
          content="Trusted engineering company serving Lagos, Abuja, Port Harcourt and beyond. Solar power, CCTV surveillance, smart home automation, and expert electrical installation for homes, businesses, and industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://benargy.com/" />
        <meta property="og:image" content="https://benargy.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Benargy Engineering Solutions | Solar, Security & Electrical Services in Nigeria"
        />
        <meta
          name="twitter:description"
          content="Serving Lagos, Abuja, Port Harcourt and nationwide. Solar, CCTV, smart home automation, and electrical services to empower homes, businesses and industries."
        />
        <meta name="twitter:image" content="https://benargy.com/logo.png" />
      </Helmet>

      <section>
        <section className="relative overflow-hidden" id="home">
          <img
            src="/hero-2.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover animate-hero-zoom"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-secondary/95 via-brand-secondary/60 to-brand-secondary/20" />
          <div className="pointer-events-none absolute inset-0 bg-grid-line bg-grid-fade" />

          <Wrapper className="relative z-10 py-24 sm:py-44">
            <HeroSection />
          </Wrapper>
        </section>

        <section className="py-16 sm:py-24 relative">
          <Wrapper>
            <div className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm shadow-brand-black/5">
              <div className="grid divide-y divide-brand-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {stats.map(({ icon: Icon, from, to, label }, idx) => (
                  <Reveal key={idx} delay={idx * 0.1} className="flex flex-col gap-4 p-8 sm:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <Title className="!text-brand-primary !text-4xl sm:!text-5xl">
                        <AnimatedCounter from={from} to={to} />+
                      </Title>
                      <BodyText className="mt-2">{label}</BodyText>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Wrapper>
        </section>

        <section className="bg-brand-gray py-16 sm:py-32" id="mission">
          <Wrapper>
            <ServicesSection />
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32">
          <Wrapper>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-16 items-center">
              <Reveal>
                <Eyebrow className="mb-4">About Us</Eyebrow>
                <Title className="!font-medium">
                  Benargy Engineering Solutions delivers innovative and
                  sustainable engineering solutions to empower homes,
                  businesses and industries.
                </Title>
                <BodyText className="mt-5 max-w-lg">
                  From solar and inverter installation to smart home
                  automation, security surveillance, and electrical works -
                  our certified engineers deliver end-to-end solutions built
                  to last.
                </BodyText>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#contact">
                    <Button kinds="primary" size="lg">
                      Contact Us
                    </Button>
                  </a>
                  <Button
                    kinds="outline"
                    size="lg"
                    onClick={() => setBookingOpen(true)}
                  >
                    Book a Service
                  </Button>
                </div>
              </Reveal>

              <ul className="space-y-4">
                {differentiators.map((item, idx) => (
                  <li key={item}>
                    <Reveal
                      delay={idx * 0.08 + 0.1}
                      y={16}
                      className="flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-gray p-4"
                    >
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                      <BodyText>{item}</BodyText>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </Wrapper>
        </section>
      </section>

      <BookServiceModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};
