import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  kinds?: "primary" | "secondary";
};

export const Logo = ({ kinds, ...rest }: Props) => {
  return (
    <Link to="/">
      <img
        {...rest}
        src={kinds === "secondary" ? "/logo-2.png" : "/logo.png"}
        alt="Benargy Logo"
        className="w-36 h-14 md:w-60 md:h-18 text-brand-primary"
      />
    </Link>
  );
};
