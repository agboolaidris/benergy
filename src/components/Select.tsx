import {
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

import { cva, cx, VariantProps } from "class-variance-authority";
import { ExclamationTriangleIcon } from "../icons/ExclamationTriangle";
import { ChevronDownIcon } from "../icons/Chevron";

const selectStyles = cva(
  "w-full !appearance-none text-white font-body rounded-xl border font-normal transition-colors duration-150 px-4 pr-10 sm:text-sm focus:outline-none",
  {
    defaultVariants: {
      error: false,
      size: "md",
    },
    variants: {
      error: {
        true: "!border-rose-400",
      },
      size: {
        lg: "h-16",
        md: "h-12",
        sm: "h-10",
      },
    },
  }
);

export type SelectProps = Omit<VariantProps<typeof selectStyles>, "error"> & {
  label?: string;
  error?: string;
  children: ReactNode;
} & Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "size"
  >;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, size, className, children, ...rest }, ref) => {
    return (
      <label className={cx("group block")}>
        {label && (
          <p className="mb-2 block text-sm font-medium leading-6 text-white/80 font-body">
            {label}
          </p>
        )}
        <div className="relative rounded-md">
          <select
            className={cx(
              selectStyles({ className, error: !!error, size }),
              "bg-white/5 backdrop-blur-sm border-white/25 focus:border-brand-primary"
            )}
            ref={ref}
            {...rest}
          >
            {children}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute inset-y-0 right-4 my-auto h-4 w-4 text-white/50" />
        </div>

        {error && (
          <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
            <ExclamationTriangleIcon className="h-4 w-4" />
            {error}
          </p>
        )}
      </label>
    );
  }
);

Select.displayName = "Select";
