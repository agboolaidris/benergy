import { BodyText, SubTitle } from "../components/Text";

export const MissionSection = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 text-black gap-8 sm:gap-16 items-center">
        <div className="flex-1 max-w-lg ">
          <SubTitle className="!text-brand-purple">Vision</SubTitle>
          <BodyText className="mt-4">
            To be Africa's leading provider of energy solutions, empowering
            businesses with sustainable, innovative and cost-effective energy
            systems that contribute to a greener, more efficient future.
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
            Mission
            <br />
          </SubTitle>
          <BodyText className="mt-4">
            We are committed to providing reliable and comprehensive energy
            solutions to our clients which meet cost and high service standards,
            backed by a well-equipped and highly skilled team.
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
