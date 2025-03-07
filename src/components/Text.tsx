import { cx } from "class-variance-authority";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, ...rest }: TitleProps) {
  return (
    <h2
      className={cx(
        "text-2xl font-bold font-raleway sm:text-6xl !leading-[120%]",
        className
      )}
      {...rest}
    />
  );
}

export function SubTitle({ className, ...rest }: TitleProps) {
  return (
    <h2
      className={cx(
        "text-lg font-semibold text-brand-black sm:text-4xl font-raleway",
        className
      )}
      {...rest}
    />
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p
      className={cx(
        "text-base font-normal text-brand-black font-raleway !leading-relaxed",
        className
      )}
      {...rest}
    />
  );
}
