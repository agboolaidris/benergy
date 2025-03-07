import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  kinds?: "primary" | "secondary";
};

export const Logo = ({ kinds, ...rest }: Props) => {
  return (
    <img
      {...rest}
      src={kinds === "secondary" ? "/logo-2.jpeg" : "/logo.jpeg"}
      alt="Benargy Logo"
      className="w-32 h-20 md:w-56 md:h-24 text-brand-primary"
    />
  );
};
