import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { BodyText, Title } from "../components/Text";

export const HeroSection = () => {
  return (
    <div className="max-w-3xl">
      <div>
        <Title className="text-white">
          Powering the Future with <br />
          <span className="text-brand-primary50">Smart</span> Engineering
          Solutions
        </Title>
        <BodyText className="py-5 max-w-md !text-white">
          We are your trusted partner in renewable energy solutions, Solar
          energy, Smart home automation, CCTV and electrical solutions.
        </BodyText>
        <Link to="#">
          <Button kinds="secondary" size="lg">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
};
