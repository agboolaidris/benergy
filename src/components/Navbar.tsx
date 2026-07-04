import { cx } from "class-variance-authority";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Bar3Icon, XMarkIcon } from "../icons/Bar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BookServiceModal } from "../modules/BookService";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <nav className="flex justify-between items-center gap-8 rounded-full border border-brand-line bg-white/75 px-4 py-3 shadow-sm shadow-brand-black/5 backdrop-blur-lg">
        <Logo />

        <div className="flex-1 gap-2 justify-center hidden md:flex">
          {navLinks.map(({ href, label }, idx) => {
            const active = pathname === href;
            return (
              <Link
                key={idx}
                to={href}
                className={cx(
                  "relative px-4 py-2 rounded-full font-medium text-sm cursor-pointer font-body duration-150",
                  active
                    ? "text-brand-primary"
                    : "text-brand-black hover:text-brand-primary"
                )}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-primary/10"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => setBookingOpen(true)}>
            Book a Service
          </Button>
        </div>

        <button
          className="md:hidden text-brand-black"
          onClick={() => setOpenMobile((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {openMobile ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bar3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full mt-3 md:hidden"
          >
            <div className="space-y-1 rounded-2xl border border-brand-line bg-white p-4 shadow-lg shadow-brand-black/10">
              {navLinks.map(({ href, label }, idx) => (
                <Link
                  onClick={() => setOpenMobile(false)}
                  key={idx}
                  to={href}
                  className={cx(
                    "font-medium block rounded-lg px-3 py-2.5 text-brand-black font-body duration-100",
                    pathname === href
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "hover:bg-brand-gray"
                  )}
                >
                  {label}
                </Link>
              ))}

              <div className="pt-2">
                <Button
                  block
                  size="sm"
                  onClick={() => {
                    setOpenMobile(false);
                    setBookingOpen(true);
                  }}
                >
                  Book a Service
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookServiceModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
};
