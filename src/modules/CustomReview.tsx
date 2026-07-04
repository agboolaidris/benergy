import { BodyText, Eyebrow, SubTitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { QuoteIcon } from "../icons/Quote";
import { MapPinIcon } from "../icons/MapPin";

const clientReviews = [
  {
    name: "Mr. Adewale Johnson",
    address: "Lekki Phase 1, Lagos",
    message:
      "The solar and inverter installation was top-notch. My home now enjoys stable electricity with reduced bills. The team was professional, fast, and explained everything clearly.",
  },
  {
    name: "Mrs. Chiamaka Okafor",
    address: "Gwarinpa, Abuja",
    message:
      "We had CCTV cameras installed around our office building. The clarity is excellent, and I love that I can monitor everything remotely. It gives us peace of mind knowing our property is secure 24/7.",
  },
  {
    name: "Mrs. Funmi Balogun",
    address: "Magodo GRA, Lagos",
    message:
      "We recently renovated our home, and they handled all the electrical installations. From wiring to lighting, everything was done neatly and safely. I couldn’t be more satisfied.",
  },
  {
    name: "Mr. Samuel Peters",
    address: "Port Harcourt, Rivers",
    message:
      "They installed a complete electrical system for my new house. From wiring to panel setup, everything was done to the highest safety standards. I trust their work completely.",
  },
  {
    name: "Mr. Tunde Adebayo",
    address: "Victoria Island, Lagos",
    message:
      "They upgraded our office wiring and installed a lightning arrestor. The work was neat, timely, and professional. Now we feel more secure about our electrical systems.",
  },
  {
    name: "Mrs. Bukola Fashola",
    address: "Bodija, Ibadan",
    message:
      "The solar panels installed on our rooftop have been performing excellently. Even during cloudy days, we still have power. Their team is knowledgeable and supportive.",
  },
  {
    name: "Mrs. Abiola Ogunleye",
    address: "Ajah, Lagos",
    message:
      "The inverter system they installed works flawlessly. Even during long blackouts, we have uninterrupted power. Their expertise in solar energy is commendable.",
  },
  {
    name: "Engr. Ibrahim Musa",
    address: "Kano Municipal, Kano",
    message:
      "Thanks to their smart home automation service, I can now control my lights and appliances with my phone. It’s convenient, energy-saving, and has made life so much easier for my family.",
  },
  {
    name: "Mrs. Bisi Osho",
    address: "Ikoyi, Lagos",
    message:
      "We wanted both solar power and security cameras. They delivered excellently on both. Professional service and very reliable products.",
  },
  {
    name: "Chief Emeka Nwosu",
    address: "Independence Layout, Enugu",
    message:
      "The inverter system they installed works flawlessly, even during long blackouts. My family can now enjoy uninterrupted power. Their expertise in renewable energy is truly commendable.",
  },
  {
    name: "Mr. Segun Adeyemi",
    address: "Yaba, Lagos",
    message:
      "I love how they set up smart lighting and entertainment systems in our home. Everything is controlled from my phone now. Very convenient and modern!",
  },
  {
    name: "Dr. Halima Yusuf",
    address: "Barnawa, Kaduna",
    message:
      "I love how they combined smart home automation with security cameras for my residence. Now I can monitor my house and control devices wherever I am. It feels safer and more convenient.",
  },
  {
    name: "Mrs. Zainab Suleiman",
    address: "Tanke, Ilorin",
    message:
      "The solar installation has been a life-changer. No more worrying about fuel for generators. My energy bills have dropped significantly, and the power supply is stable.",
  },
  {
    name: "Mrs. Grace Edet",
    address: "State Housing, Calabar",
    message:
      "We wanted a smart home system for lighting and entertainment. The installation was seamless, and the system works perfectly. My kids enjoy controlling the lights with voice commands.",
  },
  {
    name: "Mr. Nnamdi Eze",
    address: "Awka, Anambra",
    message:
      "Their security camera installation was excellent. The picture quality is clear even at night, and I can access everything from my mobile phone. Highly reliable service.",
  },
];

export type Review = {
  name: string;
  address: string;
  message: string;
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <article className="group relative w-[380px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.07] sm:w-[420px]">
      <QuoteIcon className="absolute -top-4 -right-4 h-16 w-16 text-brand-primary opacity-10 group-hover:opacity-20" />

      <div className="mb-3 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 font-heading font-semibold text-brand-primary50">
          {review.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="min-w-0">
          <BodyText className="truncate text-base font-semibold !text-white">
            {review.name}
          </BodyText>
          <BodyText className="mt-0.5 flex items-center gap-1 text-sm !text-white/50">
            <MapPinIcon className="h-4 w-4" /> {review.address}
          </BodyText>
        </div>
      </div>

      <BodyText className="text-sm leading-relaxed !text-white/70">
        {review.message}
      </BodyText>
    </article>
  );
};

const MarqueeRow = ({
  reviews,
  direction,
  duration,
}: {
  reviews: Review[];
  direction: "left" | "right";
  duration: number;
}) => {
  return (
    <div className="group flex w-max">
      <div
        className={
          direction === "left"
            ? "flex w-max shrink-0 gap-6 animate-marquee-left group-hover:[animation-play-state:paused]"
            : "flex w-max shrink-0 gap-6 animate-marquee-right group-hover:[animation-play-state:paused]"
        }
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
    </div>
  );
};

export const CustomReview = () => {
  const mid = Math.ceil(clientReviews.length / 2);
  const rowOne = clientReviews.slice(0, mid);
  const rowTwo = clientReviews.slice(mid);

  return (
    <div>
      <Wrapper className="text-center">
        <Eyebrow className="mb-4 w-full justify-center !text-brand-primary50">
          Testimonials
        </Eyebrow>
        <SubTitle className="!text-white">What Our Clients Say About Us</SubTitle>
      </Wrapper>
      <div className="relative mt-8 space-y-6 overflow-hidden mask-fade-x sm:mt-16">
        <MarqueeRow reviews={rowOne} direction="left" duration={55} />
        <MarqueeRow reviews={rowTwo} direction="right" duration={65} />
      </div>
    </div>
  );
};
