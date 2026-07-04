import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { BodyText, Eyebrow, Title } from "../components/Text";
import { BookServiceModal } from "./BookService";

export const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <Eyebrow className="!text-brand-primary50 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary50" />
          Engineering Solutions, Built for Nigeria
        </Eyebrow>
        <Title as="h1" className="text-white">
          Powering the Future with <br />
          <span className="text-brand-primary50">Smart</span> Engineering
          Solutions
        </Title>
        <BodyText className="py-5 max-w-md !text-white/80">
          We are your trusted partner in renewable energy solutions, Solar
          energy, Smart home automation, CCTV and electrical solutions.
        </BodyText>
        <div className="flex flex-wrap gap-4">
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
    </motion.div>
  );
};
