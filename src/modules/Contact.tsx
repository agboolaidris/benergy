import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SubTitle } from "../components/Text";
import { TextArea } from "../components/Textarea";

export const ContactSection = () => {
  return (
    <div>
      <SubTitle className="!text-white text-center">
        Have Questions or Need <br /> Guidance?
      </SubTitle>
      <form className="mt-8 sm:mt-16">
        <div className="grid grid-cols-2 gap-8">
          <Input placeholder="Your name" />
          <Input placeholder="Email ID" />

          <Input placeholder="Phone No." />
          <Input placeholder="Subject" />
          <div className="col-span-2">
            <TextArea placeholder="Your Message" />
          </div>
        </div>
        <Button size="md" className="mx-auto mt-8" kinds="normal">
          Send Message
        </Button>
      </form>
    </div>
  );
};
