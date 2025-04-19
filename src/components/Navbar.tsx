import { cx } from "class-variance-authority";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Bar3Icon, XMarkIcon } from "../icons/Bar";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center gap-8 py-4">
        <button
          className="md:hidden"
          onClick={() => setOpenMobile((prev) => !prev)}
        >
          {openMobile ? (
            <XMarkIcon className="w-6 h-6 text-brand-black" />
          ) : (
            <Bar3Icon className="w-6 h-6 text-brand-black" />
          )}
        </button>
        <Logo />

        <div className="flex-1 gap-12 justify-center hidden md:flex">
          {navLinks.map(({ href, label }, idx) => (
            <Link
              key={idx}
              to={href}
              className={cx(
                "font-medium text-brand-black hover:underline cursor-pointer font-raleway hover:opacity-80 duration-100"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a className="block" href="#contact">
            <Button>Get in Touch</Button>
          </a>
        </div>
      </nav>

      {openMobile && (
        <div className="space-y-8 py-6 ">
          {navLinks.map(({ href, label }, idx) => (
            <a
              onClick={() => setOpenMobile((prev) => !prev)}
              key={idx}
              href={href}
              className={cx(
                "font-semibold block hover:underline text-brand-black font-raleway hover:text-opacity-80 duration-100"
              )}
            >
              {label}
            </a>
          ))}

          <a className="block" href="#contact">
            <Button block onClick={() => setOpenMobile((prev) => !prev)}>
              Get in Touch
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};
