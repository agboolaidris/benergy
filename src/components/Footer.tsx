import { FacebookIcon, TikTokIcon, InstagramIcon } from "../icons/Social";
import { getExactYear } from "../utils/date";
import { Logo } from "./Logo";
import { BodyText } from "./Text";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#mission", label: "Mission" },
];
const contacts = [
  {
    href: "https://www.instagram.com/intrasolutionsc?igsh=dWpjOGN0djY1cXg1",
    icon: InstagramIcon,
  },
  {
    href: "",
    icon: FacebookIcon,
  },
  {
    href: "",
    icon: TikTokIcon,
  },
];

export const Footer = () => {
  return (
    <div>
      <Logo />
      <div className="flex justify-between gap-8 flex-wrap mt-8 sm:mt-12">
        <div className="space-y-5 max-w-lg w-full">
          <div>
            <BodyText className="!font-bold !text-black">Nigeria</BodyText>
            <BodyText className="">
              12 Victoria Arobieke street, Lekki phase 1, Lagos.
            </BodyText>
          </div>
          <div>
            <BodyText className="!font-bold !text-black">Turkiye</BodyText>
            <BodyText className="">
              19 Mayis Mah. , Turapoglu Sk, Hamdiye Yazgan is merkezi, No 4
              kat2, Kozyatağı/ İstanbul.
            </BodyText>
          </div>
        </div>

        <div>
          <div className="flex justify-end gap-6 flex-wrap">
            {navLinks.map(({ href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                className="block  text-black cursor-pointer hover:underline font-raleway font-medium mb-6"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-10 flex justify-end gap-8">
            {contacts.map(({ href, icon: Icon }, idx) => (
              <a
                key={idx}
                href={href}
                className="flex gap-1 items-center cursor-pointer hover:underline font-raleway font-medium mb-6"
              >
                <Icon className="w-6 h-6 text-black" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px bg-brand-black my-8 sm:my-16" />
      <div className="flex justify-between gap-8 items-center ">
        <BodyText className="text-center !text-sm">
          All Rights Reserved
        </BodyText>
        <BodyText className="text-center !text-sm">
          ©{getExactYear()} BenargyEngineeringSolution. All rights reserved.
        </BodyText>
      </div>
    </div>
  );
};
