import { BodyText, SubTitle } from "../components/Text";
import { ArrowRightIcon } from "../icons/Arrow";

const objectives = [
  {
    img: "/services/electrical-design.png",
    label: "Electrical Design",
  },
  {
    img: "/services/electrical-installation.png",
    label: "Electrical Installation",
  },
  {
    img: "/services/business-review.svg",
    label: "Circuit design",
  },
  {
    img: "/services/automation-solutions.png",
    label: "Automation Solutions",
  },
  {
    img: "/services/expert-consultation.png",
    label: "Expert Consultation",
  },
  {
    img: "/services/product-development.svg",
    label: "Control Systems",
  },
  {
    img: "/services/performance-management.svg",
    label: "Sensor integration",
  },
  {
    img: "/services/training.svg",
    label: "Training",
  },
  {
    img: "/services/procurement.svg",
    label: "Electrical system inspections",
  },
  {
    img: "/services/cultural-adaptation.svg",
    label: "Power quality analysis",
  },
  {
    img: "/services/ios-based-smart-system.png",
    label: "IoT-based smart systems",
  },
  {
    img: "/services/solar-panel-installation.png",
    label: "Solar panel installation",
  },
];

export const ServicesSection = () => {
  return (
    <div>
      <div>
        <SubTitle className="!text-white">Our Services</SubTitle>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 gap-y-16">
        {objectives.map(({ img, label }) => (
          <div>
            <div className="aspect-[280/365] relative overflow-hidden rounded-md">
              <img
                src={img}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between gap-2 items-center mt-5">
              <BodyText className="sm:text-lg max-w-32 !text-white">
                {label}
              </BodyText>
              <div className="bg-white w-6 flex justify-center items-center aspect-square rounded-full ">
                <ArrowRightIcon className="w-4 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
