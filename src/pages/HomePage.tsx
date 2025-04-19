import { BodyText, Title } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { HeroSection } from "../modules/Hero";
import Slider, { Settings } from "react-slick";

import { ServicesSection } from "../components/Services";
import { AnimatedCounter } from "../components/AnimatedCounter";

const images = ["/hero.svg", "/hero.svg", "/hero.svg"];

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "linear",
};

export const HomePage = () => {
  return (
    <section>
      <section className="relative overflow-hidden" id="home">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                className="w-full h-full absolute inset-0 object-cover"
              />

              <Wrapper className="relative z-10 py-20 sm:py-40">
                <HeroSection />
              </Wrapper>
            </div>
          ))}
        </Slider>
      </section>

      <section className="py-16 sm:py-32">
        <Wrapper className="relative  flex items-center ">
          <div className="max-w-5xl">
            <BodyText className=" font-semibold text-xl">About</BodyText>
            <Title className=" !font-medium mt-4 sm:mt-8">
              Benargy Engineering Solutions delivers innovative and sustainable
              engineering solutions to empower homes, businesses and industries.
            </Title>
          </div>
        </Wrapper>
      </section>

      <section className="bg-brand-gray py-16 sm:py-32" id="mission">
        <Wrapper>
          <ServicesSection />
        </Wrapper>
      </section>

      <section className="py-8 sm:py-16 relative ">
        <Wrapper>
          <div className="flex justify-between gap-10 md:gap-20">
            <div>
              <Title className="!text-brand-primary50">
                <AnimatedCounter from={0} to={10} />+
              </Title>

              <BodyText>Year of Excellence in Service</BodyText>
            </div>
            <div>
              <Title className="!text-brand-primary50">
                <AnimatedCounter from={190} to={200} />+
              </Title>

              <BodyText>Completed Projects</BodyText>
            </div>
            <div>
              <Title className="!text-brand-primary50">
                <AnimatedCounter from={50} to={67} />+
              </Title>

              <BodyText>happy customers</BodyText>
            </div>
          </div>
        </Wrapper>
      </section>
    </section>
  );
};
