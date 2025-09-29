import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Wrapper } from "../components/Wrapper";
import { SubTitle } from "../components/Text";
import { Button } from "../components/Button";

// All 50 slides
const slides = Array.from({ length: 21 }, (_, i) => ({
  src: `/gallery/${i}.jpg`,
}));

// Number of images to show in grid initially
const INITIAL_VISIBLE = 12;

export const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const showMore = () => {
    setVisible((prev) => Math.min(prev + INITIAL_VISIBLE, slides.length));
  };

  return (
    <Wrapper className="max-w-7xl">
      <SubTitle className="text-center mb-8 sm:mb-16">
        Our Projects & On-Site Work
      </SubTitle>

      {/* Masonry Image Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
        {slides.slice(0, visible).map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="relative w-full break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={slide.src}
              alt={`Gallery Image ${i + 1}`}
              className="w-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-sm">View</span>
            </div>
          </button>
        ))}
      </div>

      {/* Show More Button */}
      {visible < slides.length && (
        <div className="text-center mt-8">
          <Button
            onClick={showMore}
            className="!px-6 !py-2 rounded-full shadow w-max mx-auto transition"
          >
            View More
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </Wrapper>
  );
};
