import { BodyText, SubTitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { cx } from "class-variance-authority";

const values = [
  "Integrity",
  "Building Relationships",
  "Reliability",
  "Success",
];

export const CompanyValuesSection = () => {
  return (
    <div>
      <SubTitle className="!text-brand-purple text-center">
        Core Values
      </SubTitle>

      <div className=" relative mt-8 sm:mt-16">
        <img
          src="/value.svg"
          className="absolute h-full object-cover  inset-0 w-full"
        />
        <Wrapper className="grid grid-cols-2 relative">
          {values.map((value, idx) => (
            <div
              className={cx("pt-10 relative z-10 pb-16", {
                "px-4": idx === 1 || idx === 3,
              })}
            >
              <BodyText className="!text-white !text-lg !font-medium">
                {value}
              </BodyText>
              <div className="h-1 w-10 bg-brand-yellow mt-3" />
            </div>
          ))}
        </Wrapper>
      </div>
    </div>
  );
};
