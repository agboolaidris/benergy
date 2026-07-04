import { cx } from "class-variance-authority";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  as?: "h1" | "h2" | "h3" | "h4";
};

export function Eyebrow({ className, ...rest }: TitleProps) {
  return (
    <p
      className={cx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary font-body",
        className
      )}
      {...rest}
    />
  );
}

export function Title({ className, as: Tag = "h2", ...rest }: TitleProps) {
  return (
    <Tag
      className={cx(
        "text-3xl font-semibold text-brand-black font-heading tracking-tight sm:text-6xl !leading-[110%]",
        className
      )}
      {...rest}
    />
  );
}

export function SubTitle({ className, as: Tag = "h2", ...rest }: TitleProps) {
  return (
    <Tag
      className={cx(
        "text-xl font-semibold text-brand-black sm:text-4xl font-heading tracking-tight !leading-[115%]",
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
        "text-base font-normal text-brand-slate font-body !leading-relaxed",
        className
      )}
      {...rest}
    />
  );
}
