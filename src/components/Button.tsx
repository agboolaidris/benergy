import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

const buttonStyle = cva(
  "font-semibold font-body gap-2 flex cursor-pointer justify-center items-center w-max rounded-full transition-all duration-200 text-sm disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.97]",
  {
    defaultVariants: {
      block: false,
      kinds: "primary",
      size: "lg",
    },
    variants: {
      block: { true: "!w-full" },
      kinds: {
        normal:
          "border border-white/40 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/70",
        primary:
          "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-primary50 hover:shadow-brand-primary/35",
        secondary:
          "bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20 hover:bg-brand-secondary50",
        outline:
          "border border-brand-line text-brand-black hover:border-brand-primary hover:text-brand-primary",
      },
      size: {
        lg: "px-8 py-4",
        md: "px-6 py-3",
        sm: "px-4 py-2.5 !text-sm",
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyle> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    className?: string;
    children: ReactNode;
  };

export function Button({
  className,
  children,
  size,
  kinds,
  block,
  isLoading,
  ...props
}: Props) {
  const style = cx(buttonStyle({ block, kinds, size }), className);

  return (
    <button className={style} {...props}>
      {isLoading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-white" />
      )}
      {children}
    </button>
  );
}
