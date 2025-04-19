import { ServicesSection } from "../components/Services";
import { BodyText, SubTitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";

export const ServicePage = () => {
  return (
    <section>
      <section className="py-8 sm:py-16 relative bg-brand-secondary" id="about">
        <img
          src="/about.svg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Wrapper className="relative aspect-video flex items-center ">
          <div className="max-w-5xl">
            <BodyText className=" !text-brand-primary font-semibold text-xl">
              Our Service
            </BodyText>
            <SubTitle className="!text-white !font-medium mt-4 sm:mt-8">
              We are committed to providing top-notch solutions for your home or
              business, making them safer, smarter, and more energy-efficient.
              Let us help you create a more sustainable and connected future.
            </SubTitle>
          </div>
        </Wrapper>
      </section>

      <section className=" py-16 sm:py-32" id="mission">
        <Wrapper>
          <ServicesSection showTitle={false} />
        </Wrapper>
      </section>
    </section>
  );
};
