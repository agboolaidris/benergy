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
    href: "https://www.instagram.com/benargy_es?igsh=azRoZDVyOGdodmQw&utm_source=qrnstagram",
    icon: InstagramIcon,
  },
  {
    href: "",
    icon: FacebookIcon,
  },
  {
    href: "https://www.tiktok.com/@benargy?_t=ZM-8u5G00QoQR4&_r=1Tiktok",
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
            <BodyText className="!font-bold !text-black">Contact</BodyText>
            <BodyText className="">08091167852, 09031257244</BodyText>
          </div>
          <div>
            <BodyText className="!font-bold !text-black">Address</BodyText>
            <BodyText className="">
              24,Olusoji imole street, Mile 12, Lagos.
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
