import { Button } from "../components/Button";
import { BodyText, Title } from "../components/Text";

export const HeroSection = () => {
  return (
    <div className="max-w-3xl">
      <div>
        <Title className="text-white">
          Empowering Your Business with <br />
          <span className="text-brand-primary50">Benargy </span>Solutions
        </Title>
        <BodyText className="py-5 max-w-md !text-white">
          We are Your Trusted Partner in Renewable Energy Solutions, Solar
          Energy, Electrical Installation, and Business Expansion.
        </BodyText>
        <Button kinds="secondary" size="lg">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
