import { BodyText, Eyebrow, SubTitle } from "../components/Text";
import { Reveal } from "../components/Reveal";

export const MissionSection = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      <div className="grid sm:grid-cols-2 text-black gap-8 sm:gap-16 items-center">
        <Reveal className="flex-1 max-w-lg">
          <Eyebrow className="mb-3">Our Vision</Eyebrow>
          <SubTitle>Vision</SubTitle>
          <BodyText className="mt-4">
            To be Africa's leading provider of energy solutions, empowering
            businesses with sustainable, innovative and cost-effective energy
            systems that contribute to a greener, more efficient future.
          </BodyText>
        </Reveal>
        <Reveal
          delay={0.1}
          className="order-first flex-1 sm:order-last max-w-lg relative aspect-[545/444] overflow-hidden rounded-3xl shadow-xl shadow-brand-black/10"
        >
          <img
            src="/mission.png"
            alt="Benargy Engineering Solutions - our vision for a sustainable energy future"
            className="absolute object-cover w-full h-full"
          />
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 text-black gap-8 sm:gap-16 items-center">
        <Reveal className="flex-1 max-w-lg">
          <Eyebrow className="mb-3">Our Mission</Eyebrow>
          <SubTitle>Mission</SubTitle>
          <BodyText className="mt-4">
            We are committed to providing reliable and comprehensive energy
            solutions to our clients which meet cost and high service
            standards, backed by a well-equipped and highly skilled team.
          </BodyText>
        </Reveal>
        <Reveal
          delay={0.1}
          className="order-first max-w-lg relative aspect-[545/444] flex-1 overflow-hidden rounded-3xl shadow-xl shadow-brand-black/10"
        >
          <img
            src="/vision.png"
            alt="Benargy Engineering Solutions team delivering energy solutions"
            className="absolute object-cover h-full w-full"
          />
        </Reveal>
      </div>
    </div>
  );
};
