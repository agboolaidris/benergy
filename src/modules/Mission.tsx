import { BodyText, SubTitle } from "../components/Text";

export const MissionSection = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 text-black gap-8 sm:gap-16 items-center">
        <div className="flex-1 max-w-lg ">
          <SubTitle className="!text-brand-purple">Mission</SubTitle>
          <BodyText className="mt-4">
            Our mission is to provide innovative renewable energy solutions,
            including solar energy and electrical installations. We aim to
            empower businesses with sustainable, cost-effective energy solutions
            that drive growth and promote environmental sustainability.
          </BodyText>
        </div>
        <div className="flex-1 relative aspect-[545/444] max-w-lg  order-first sm:order-last">
          <img
            src="/mission.png"
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 text-black gap-8 sm:gap-16 mt-16 sm:mt-32 items-center">
        <div className="flex-1 max-w-lg">
          <SubTitle className="!text-brand-purple">
            Vision
            <br />
          </SubTitle>
          <BodyText className="mt-4">
            To be a leading provider of renewable energy solutions, empowering
            businesses worldwide with sustainable, innovative, and
            cost-effective energy systems that contribute to a greener, more
            efficient future.
          </BodyText>
        </div>
        <div className="flex-1 relative aspect-[545/444] max-w-lg order-first overflow-hidden">
          <img
            src="/vision.png"
            className="absolute object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
