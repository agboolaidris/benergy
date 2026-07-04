import { useState } from "react";
import { Button } from "../components/Button";
import { BodyText, Eyebrow, SubTitle } from "../components/Text";
import { BookServiceModal } from "./BookService";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export const CtaBannerSection = ({
  eyebrow = "Get Started",
  title,
  description,
}: Props) => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-secondary px-6 py-16 text-center sm:px-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-line bg-grid-fade" />

      <div className="relative mx-auto max-w-2xl">
        <Eyebrow className="mb-4 justify-center !text-brand-primary50">
          {eyebrow}
        </Eyebrow>
        <SubTitle className="!text-white">{title}</SubTitle>
        <BodyText className="mt-4 !text-white/70">{description}</BodyText>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contact">
            <Button kinds="primary" size="lg">
              Contact Us
            </Button>
          </a>
          <Button
            kinds="normal"
            size="lg"
            onClick={() => setBookingOpen(true)}
          >
            Book a Service
          </Button>
        </div>
      </div>

      <BookServiceModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
};
