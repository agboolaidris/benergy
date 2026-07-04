import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { TextArea } from "../components/Textarea";
import { PhoneInput } from "../components/PhoneInput";
import { DatePicker } from "../components/DatePicker";
import { BodyText, SubTitle } from "../components/Text";
import { XMarkIcon } from "../icons/Bar";
import { sendEmail } from "../utils/email";

const serviceOptions = [
  "Solar/Inverter Installation",
  "Security Camera & Surveillance",
  "Smart Home Automation",
  "Electrical Installation Services",
  "Other",
];

const Schema = Yup.object({
  serviceType: Yup.string().required("Please select a service"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\+\d{8,14}$/, "Enter a valid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  preferredDate: Yup.string().required("Preferred date is required"),
  note: Yup.string().optional(),
});

type ISchema = Yup.InferType<typeof Schema>;

const today = new Date().toISOString().split("T")[0];

type Props = {
  open: boolean;
  onClose: () => void;
};

export const BookServiceModal = ({ open, onClose }: Props) => {
  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      phone: "+234",
      preferredDate: "",
    },
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    register,
    control,
  } = methods;

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const onSubmit: SubmitHandler<ISchema> = useCallback(
    async (payload) => {
      try {
        const message = [
          `Service: ${payload.serviceType}`,
          `Address: ${payload.address}`,
          `Preferred Date: ${payload.preferredDate}`,
          payload.note ? `Note: ${payload.note}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        await sendEmail({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          subject: "New Service Booking Request",
          message,
        });

        toast.success(
          "Your booking request has been sent - we'll be in touch shortly"
        );
        reset();
        onClose();
      } catch {
        toast.error("The booking request was not sent due to an error");
      }
    },
    [reset, onClose]
  );

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="absolute inset-0 flex items-center justify-center overflow-y-auto p-4 py-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="book-service-title"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-brand-secondary p-6 shadow-2xl sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-grid-line bg-grid-fade" />
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 duration-150 hover:border-brand-primary hover:text-brand-primary"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="relative">
                <SubTitle id="book-service-title" className="!text-white">
                  Book a Service
                </SubTitle>
                <BodyText className="mt-2 !text-white/60">
                  Tell us what you need and when - we'll confirm your booking
                  shortly.
                </BodyText>

                <form
                  className="mt-8 space-y-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Select
                    defaultValue=""
                    {...register("serviceType")}
                    error={errors.serviceType?.message}
                  >
                    <option value="" disabled className="bg-brand-secondary">
                      Select a service
                    </option>
                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-brand-secondary"
                      >
                        {service}
                      </option>
                    ))}
                  </Select>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="Your name"
                      {...register("name")}
                      error={errors.name?.message}
                    />
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={errors.phone?.message}
                        />
                      )}
                    />
                  </div>

                  <Input
                    placeholder="Email ID"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <Input
                    placeholder="Service address"
                    {...register("address")}
                    error={errors.address?.message}
                  />

                  <Controller
                    name="preferredDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        min={today}
                        placeholder="Preferred date"
                        error={errors.preferredDate?.message}
                      />
                    )}
                  />

                  <TextArea
                    placeholder="Anything else we should know? (optional)"
                    size="sm"
                    {...register("note")}
                    error={errors.note?.message}
                  />

                  <Button
                    size="md"
                    block
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    kinds="primary"
                    className="!mt-6"
                  >
                    Request Booking
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
