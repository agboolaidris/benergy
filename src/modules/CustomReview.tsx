import { BodyText, SubTitle } from "../components/Text";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
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

const settings: Settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  cssEase: "linear",
  dots: false,
  infinite: true,
  responsive: [
    { breakpoint: 300, settings: { slidesToShow: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
  ],
  slidesToShow: 3,
  speed: 5000,
};

export type Review = {
  name: string;
  address: string;
  message: string;
  rating?: number; // optional if you want to show stars later
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden  p-5  "
    >
      <QuoteIcon className="absolute -top-4 -right-4 h-16 w-16 opacity-5 group-hover:opacity-10" />

      <div className="mb-3 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-brand-primary">
          {review.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="min-w-0">
          <BodyText className="truncate text-base font-semibold ">
            {review.name}
          </BodyText>
          <BodyText className="mt-0.5 flex items-center gap-1 text-sm ">
            <MapPinIcon className="h-4 w-4" /> {review.address}
          </BodyText>
        </div>
      </div>

      <BodyText className="text-sm leading-relaxed">{review.message}</BodyText>
    </motion.article>
  );
};

export const CustomReview = () => {
  return (
    <div>
      <SubTitle className="text-center">What Our Clients Say About Us</SubTitle>
      <div className="mt-8 sm:mt-16">
        <Slider {...settings}>
          {clientReviews.map((review, index) => (
            <div className="px-4" key={index}>
              <div className="bg-white rounded cursor-pointer hover:shadow">
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
