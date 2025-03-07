import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

const buttonStyle = cva(
  "font-semibold font-raleway  gap-2 flex cursor-pointer justify-center items-center w-max transition-all duration-150  text-sm  disabled:opacity-70",
  {
    defaultVariants: {
      block: false,
      kinds: "primary",
      rounded: false,
      size: "lg",
    },
    variants: {
      block: { true: "!w-full" },
      kinds: {
        normal: "border-white border text-white  hover:opacity-70",
        primary:
          "bg-brand-primary text-white  hover:bg-brand-primary50 shadow-sm",
        secondary: "bg-brand-secondary text-white  hover:bg-",
      },
      rounded: {
        true: "!rounded-full",
      },
      size: {
        lg: "px-10 py-5",
        md: "px-4 py-3",
        sm: "px-2.5 py-2 !text-sm",
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
  rounded,
  ...props
}: Props) {
  const style = cx(buttonStyle({ block, kinds, rounded, size }), className);

  return (
    <button className={style} {...props}>
      {isLoading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-white" />
      )}
      {children}
    </button>
  );
}
