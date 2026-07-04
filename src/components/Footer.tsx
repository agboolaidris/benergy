import { Link } from "react-router-dom";
import { FacebookIcon, TikTokIcon, InstagramIcon } from "../icons/Social";
import { PhoneIcon } from "../icons/Phone";
import { MapPinIcon } from "../icons/MapPin";
import { getExactYear } from "../utils/date";
import { Logo } from "./Logo";
import { BodyText } from "./Text";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

const phoneNumbers = [
  { display: "+234 809 116 7852", href: "tel:+2348091167852" },
  { display: "+234 903 125 7244", href: "tel:+2349031257244" },
];

const socials = [
  {
    href: "https://www.instagram.com/benargy_es?igsh=azRoZDVyOGdodmQw&utm_source=qrnstagram",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "#",
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@benargy?_t=ZM-8u5G00QoQR4&_r=1Tiktok",
    icon: TikTokIcon,
    label: "TikTok",
  },
];

export const Footer = () => {
  return (
    <div>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo kinds="secondary" />
          <BodyText className="mt-5 !text-white/60">
            Innovative and sustainable engineering solutions for homes,
            businesses and industries across Nigeria.
          </BodyText>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, icon: Icon, label }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 cursor-pointer duration-150 hover:border-brand-primary hover:bg-brand-primary/10"
              >
                <Icon className="h-4 w-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <BodyText className="!font-semibold !text-white">
            Quick Links
          </BodyText>
          <div className="mt-4 space-y-3">
            {quickLinks.map(({ href, label }, idx) => (
              <Link
                key={idx}
                to={href}
                className="block text-white/60 font-body duration-150 hover:text-brand-primary"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <BodyText className="!font-semibold !text-white">Contact</BodyText>
          <div className="mt-4 space-y-3">
            {phoneNumbers.map(({ display, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="flex items-center gap-2 text-white/60 font-body duration-150 hover:text-brand-primary"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {display}
              </a>
            ))}
            <div className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
              <BodyText className="!text-white/60">
                24, Olusoji Imole Street, Mile 12, Lagos.
              </BodyText>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 h-px bg-white/10 sm:my-16" />

      <BodyText className="text-center !text-sm !text-white/40">
        © {getExactYear()} Benargy Engineering Solutions. All rights reserved.
      </BodyText>
    </div>
  );
};
