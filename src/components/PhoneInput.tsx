import PhoneInputLib from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cx } from "class-variance-authority";
import { ExclamationTriangleIcon } from "../icons/ExclamationTriangle";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  label?: string;
  error?: string;
};

export const PhoneInput = ({
  value,
  onChange,
  onBlur,
  label,
  error,
}: Props) => {
  return (
    <label className="group block">
      {label && (
        <p className="mb-2 block text-sm font-medium leading-6 text-white/80 font-body">
          {label}
        </p>
      )}
      <PhoneInputLib
        country="ng"
        value={value.startsWith("+") ? value.slice(1) : value}
        onChange={(phone) => onChange(`+${phone}`)}
        onBlur={() => onBlur?.()}
        enableSearch
        specialLabel=""
        inputProps={{ name: "phone" }}
        containerClass={cx(
          "phone-input-dark",
          error && "phone-input-dark-error"
        )}
      />

      {error && (
        <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
          <ExclamationTriangleIcon className="h-4 w-4" />
          {error}
        </p>
      )}
    </label>
  );
};
