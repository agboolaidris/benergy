import emailjs from "@emailjs/browser";

type Payload = {
  email: string;
  message: string;
  name: string;
  phone: string;
  subject?: string;
};

export const sendEmail = async (payload: Payload) => {
  await emailjs.send("service_jao9bzi", "template_eo6f4us", payload, {
    publicKey: "LjwSl7cFFOHopIkag",
  });
};
