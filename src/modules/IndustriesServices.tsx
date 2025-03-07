import { BodyText, SubTitle } from "../components/Text";
import {
  ConstructionIcon,
  FinanceIcon,
  HealthCareIcon,
  HospitalityIcon,
  ImportationIcon,
  InfrastructureIcon,
  ManufacturingIcon,
  TechnologyIcon,
} from "../icons/Industries";

const objectives = [
  {
    icon: InfrastructureIcon,
    label: "Infrastructure",
  },
  {
    icon: ConstructionIcon,
    label: "Construction",
  },
  {
    icon: HospitalityIcon,
    label: "Hospitality",
  },
  {
    icon: HealthCareIcon,
    label: "HealthCare",
  },
  {
    icon: FinanceIcon,
    label: "Finance",
  },
  {
    icon: ManufacturingIcon,
    label: " Manufacturing",
  },
  {
    icon: ImportationIcon,
    label: "Importation",
  },
  {
    icon: TechnologyIcon,
    label: "Technology",
  },
];

export const IndustriesServicesSection = () => {
  return (
    <div>
      <div className="text-center">
        <SubTitle className="!text-brand-pinkish-purple">
          Industries We Serve
        </SubTitle>
        <BodyText className="mt-2 sm:mt-4">
          IntraSolutions Consultancy provides expertise across various sectors
        </BodyText>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 sm:mt-16 gap-y-16">
        {objectives.map(({ icon: Icon, label }) => (
          <div className="bg-white  p-4 sm:p-8 text-center border-b-4 border-brand-pinkish-purple">
            <Icon className="w-10 h-10 mx-auto" />
            <BodyText className="mt-4 sm:text-xl !font-medium">
              {label}
            </BodyText>
          </div>
        ))}
      </div>
    </div>
  );
};
