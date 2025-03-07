import { cx } from "class-variance-authority";
import React, { DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const Wrapper = ({ className, ...rest }: Props) => {
  return (
    <section
      className={cx("mx-auto max-w-7xl px-4 sm:px-6 xl:px-8", className)}
      {...rest}
    />
  );
};
