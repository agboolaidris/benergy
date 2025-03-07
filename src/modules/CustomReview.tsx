import { SubTitle } from "../components/Text";
import Slider, { Settings } from "react-slick";

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

export const CustomReview = () => {
  return (
    <div>
      <SubTitle className="text-center">What Our Clients Say About Us</SubTitle>
      <div className="mt-8 sm:mt-16">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
            <div className="px-4" key={index}>
              <div className="flex aspect-[3/2] items-center justify-center rounded-lg bg-gray-200  px-4">
                {i}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
