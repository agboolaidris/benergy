import { useState } from "react";
import { cx } from "class-variance-authority";
import { ServicesSection } from "../modules/Services";
import { CtaBannerSection } from "../modules/CtaBanner";
import { BodyText, Eyebrow, SubTitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { Helmet } from "react-helmet-async";
import { ChevronDownIcon } from "../icons/Chevron";
import { Reveal } from "../components/Reveal";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Tell us what you need - home, business, or industrial - and we assess your site and requirements.",
  },
  {
    number: "02",
    title: "Design & Quote",
    description:
      "We design a solution tailored to your space and budget, with a clear, upfront quote.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our certified engineers handle installation with care, minimal disruption, and strict safety standards.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We stay reachable after handover for maintenance, troubleshooting, and upgrades.",
  },
];

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We serve homes and businesses across Lagos, Abuja, Port Harcourt, and other locations nationwide.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes - our team handles solar, security, automation, and electrical installations for homes, offices, and industrial sites alike.",
  },
  {
    question: "What happens after installation?",
    answer:
      "We don't disappear after handover. Our team remains available for maintenance, troubleshooting, and future upgrades.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via the contact form or book a service directly, and our team will get in touch to discuss your requirements and schedule a visit.",
  },
];

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-brand-line bg-white">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <SubTitle className="!text-base sm:!text-lg">{question}</SubTitle>
        <ChevronDownIcon
          className={cx(
            "h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <BodyText className="px-5 pb-5 sm:px-6 sm:pb-6">{answer}</BodyText>
      )}
    </div>
  );
};

export const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Benargy Engineering Solutions</title>
        <meta
          name="description"
          content="Solar and inverter installation, security camera and surveillance, smart home automation, and electrical installation services - delivered nationwide across Nigeria."
        />
        <link rel="canonical" href="https://benargy.com/services" />
        <meta
          property="og:title"
          content="Our Services | Benargy Engineering Solutions"
        />
        <meta
          property="og:description"
          content="Solar and inverter installation, security camera and surveillance, smart home automation, and electrical installation services across Nigeria."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://benargy.com/services" />
        <meta property="og:image" content="https://benargy.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services | Benargy Engineering Solutions"
        />
        <meta
          name="twitter:description"
          content="Solar, security, smart home automation, and electrical installation services across Nigeria."
        />
        <meta name="twitter:image" content="https://benargy.com/logo.png" />
      </Helmet>
      <section>
        <section
          className="py-16 sm:py-24 relative overflow-hidden bg-brand-secondary"
          id="about"
        >
          <img
            src="/service-hero.png"
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="pointer-events-none absolute inset-0 bg-grid-line bg-grid-fade" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-secondary/60 via-brand-secondary/70 to-brand-secondary" />
          <Wrapper className="relative aspect-video flex items-center ">
            <div className="max-w-5xl">
              <Eyebrow className="mb-4">Our Service</Eyebrow>
              <SubTitle as="h1" className="!text-white !font-medium">
                We are committed to providing top-notch solutions for your home
                or business, making them safer, smarter, and more
                energy-efficient. Let us help you create a more sustainable and
                connected future.
              </SubTitle>
            </div>
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32">
          <Wrapper>
            <div className="mb-8 sm:mb-16 mx-auto max-w-3xl text-center">
              <Eyebrow className="mb-4 justify-center">How It Works</Eyebrow>
              <SubTitle className="text-center">
                From Consultation to Completion
              </SubTitle>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(({ number, title, description }, idx) => (
                <Reveal
                  key={number}
                  delay={idx * 0.1}
                  className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm shadow-brand-black/5 sm:p-8"
                >
                  <span className="font-heading text-4xl font-semibold text-brand-primary/25">
                    {number}
                  </span>
                  <SubTitle className="!text-lg mt-3">{title}</SubTitle>
                  <BodyText className="mt-2 text-sm">{description}</BodyText>
                </Reveal>
              ))}
            </div>
          </Wrapper>
        </section>

        <section className="bg-brand-gray py-16 sm:py-32" id="mission">
          <Wrapper>
            <ServicesSection showTitle={false} />
          </Wrapper>
        </section>

        <section className="py-16 sm:py-32">
          <Wrapper className="max-w-4xl">
            <div className="mb-8 sm:mb-16 text-center">
              <Eyebrow className="mb-4 justify-center">FAQ</Eyebrow>
              <SubTitle className="text-center">Common Questions</SubTitle>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={faq.question} delay={idx * 0.08} y={16}>
                  <FaqItem {...faq} />
                </Reveal>
              ))}
            </div>
          </Wrapper>
        </section>

        <section className="py-16 sm:py-24">
          <Wrapper>
            <Reveal>
              <CtaBannerSection
                title="Ready to Get Started?"
                description="Book a consultation or reach out today - our team is ready to help you power up smarter, safer spaces."
              />
            </Reveal>
          </Wrapper>
        </section>
      </section>
    </>
  );
};
