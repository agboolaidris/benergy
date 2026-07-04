import { useEffect, useRef, useState } from "react";
import { cx } from "class-variance-authority";
import { CalendarIcon } from "../icons/Calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons/Chevron";
import { ExclamationTriangleIcon } from "../icons/ExclamationTriangle";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  min?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  name?: string;
};

const toValue = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const parseValue = (value: string) => {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const formatDisplay = (date: Date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

const weekdayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const DatePicker = ({
  value,
  onChange,
  onBlur,
  min,
  label,
  error,
  placeholder = "Select a date",
  name,
}: Props) => {
  const [open, setOpen] = useState(false);
  const selected = parseValue(value);
  const minDate = min ? parseValue(min) : null;
  const [viewDate, setViewDate] = useState(selected ?? minDate ?? new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onBlur]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const isDisabled = (day: number) => {
    if (!minDate) return false;
    const date = new Date(year, month, day);
    return date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
  };

  const isSelected = (day: number) =>
    !!selected &&
    selected.getFullYear() === year &&
    selected.getMonth() === month &&
    selected.getDate() === day;

  const selectDay = (day: number) => {
    if (isDisabled(day)) return;
    onChange(toValue(new Date(year, month, day)));
    setOpen(false);
    onBlur?.();
  };

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <p className="mb-2 block text-sm font-medium leading-6 text-white/80 font-body">
          {label}
        </p>
      )}
      <button
        type="button"
        name={name}
        onClick={() => setOpen((prev) => !prev)}
        className={cx(
          "flex h-12 w-full items-center justify-between rounded-xl border bg-white/5 px-4 text-left font-body text-sm backdrop-blur-sm transition-colors duration-150",
          error ? "!border-rose-400" : "border-white/25",
          open && "border-brand-primary"
        )}
      >
        <span className={selected ? "text-white" : "text-white/50"}>
          {selected ? formatDisplay(selected) : placeholder}
        </span>
        <CalendarIcon className="h-4 w-4 shrink-0 text-white/50" />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-72 rounded-xl border border-white/15 bg-brand-secondary p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 duration-150 hover:bg-white/10 hover:text-white"
              aria-label="Previous month"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <p className="font-body text-sm font-medium text-white">
              {new Intl.DateTimeFormat("en-GB", {
                month: "long",
                year: "numeric",
              }).format(viewDate)}
            </p>
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 duration-150 hover:bg-white/10 hover:text-white"
              aria-label="Next month"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {weekdayLabels.map((day) => (
              <span
                key={day}
                className="font-body text-xs font-medium text-white/40"
              >
                {day}
              </span>
            ))}

            {Array.from({ length: firstWeekday }).map((_, idx) => (
              <span key={`pad-${idx}`} />
            ))}

            {Array.from({ length: daysInMonth }, (_, idx) => idx + 1).map(
              (day) => (
                <button
                  key={day}
                  type="button"
                  disabled={isDisabled(day)}
                  onClick={() => selectDay(day)}
                  className={cx(
                    "flex h-8 w-8 items-center justify-center rounded-full font-body text-sm duration-150",
                    isDisabled(day)
                      ? "cursor-not-allowed text-white/20"
                      : isSelected(day)
                      ? "bg-brand-primary text-white"
                      : "text-white/80 hover:bg-white/10"
                  )}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
          <ExclamationTriangleIcon className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
};
