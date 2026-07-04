import {
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import { cva, cx, VariantProps } from "class-variance-authority";
import { ExclamationTriangleIcon } from "../icons/ExclamationTriangle";

const textareaStyles = cva(
  "w-full appearance-none p-4 font-body text-white rounded-xl border font-normal leading-relaxed transition-colors duration-150 sm:text-sm focus:outline-none",
  {
    defaultVariants: {
      error: false,
      intent: "normal",
      size: "md",
    },
    variants: {
      error: {
        true: "!border-rose-400",
      },
      intent: {
        normal:
          "border-white/25 placeholder:text-white/50 focus:border-brand-primary bg-white/5 backdrop-blur-sm",
      },
      size: {
        lg: "h-36",
        md: "h-40",
        sm: "h-28",
      },
    },
  }
);

export type TextAreaProps = Omit<
  VariantProps<typeof textareaStyles>,
  "error"
> & {
  label?: string;
  loading?: boolean;
  error?: string;
  addon?: ReactNode;
} & Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "size"
  >;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, intent, size, className, ...rest }, ref) => {
    return (
      <label className={cx("group block")}>
        {label && (
          <p className="mb-2 block text-sm text-white/80 font-medium leading-6 font-body">
            {label}
          </p>
        )}
        <div className="relative rounded-md">
          <textarea
            className={cx(
              textareaStyles({ className, error: !!error, intent, size })
            )}
            ref={ref}
            {...rest}
          />
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

TextArea.displayName = "TextArea";
