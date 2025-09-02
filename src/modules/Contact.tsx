import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SubTitle } from "../components/Text";
import { TextArea } from "../components/Textarea";
import { sendEmail } from "../utils/email";
import toast from "react-hot-toast";
import { useCallback } from "react";

const Schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  subject: Yup.string().optional(),
});

type ISchema = Yup.InferType<typeof Schema>;

export const ContactSection = () => {
  const methods = useForm({
    resolver: yupResolver(Schema),
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    register,
  } = methods;

  const onSubmit: SubmitHandler<ISchema> = useCallback(
    async (payload) => {
      try {
        await sendEmail(payload);
        toast.success(
          "Your message has been sent successfully, and you will receive feedback shortly"
        );
        reset();
      } catch {
        toast.error("The message was not sent due to an error");
      }
    },
    [reset]
  );
  return (
    <div>
      <SubTitle className="!text-white text-center">
        Have Questions or Need <br /> Guidance?
      </SubTitle>
      <form className="mt-8 sm:mt-16" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <Input
            placeholder="Your name"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            placeholder="Email ID"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            placeholder="Phone No."
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Input
            placeholder="Subject"
            {...register("subject")}
            error={errors.subject?.message}
          />
          <div className="col-span-2">
            <TextArea
              placeholder="Your Message"
              {...register("message")}
              error={errors.message?.message}
            />
          </div>
        </div>
        <Button
          size="md"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="mx-auto mt-8"
          kinds="normal"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};
