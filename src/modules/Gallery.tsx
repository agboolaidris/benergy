import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Wrapper } from "../components/Wrapper";
import { Eyebrow, SubTitle } from "../components/Text";
import { Button } from "../components/Button";

// All 50 slides
const slides = Array.from({ length: 32 }, (_, i) => ({
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
      <Eyebrow className="mb-4 justify-center w-full">Our Work</Eyebrow>
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
            className="group relative w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm shadow-brand-black/10 hover:shadow-xl hover:shadow-brand-black/20 transition-shadow"
          >
            <img
              src={slide.src}
              alt={`Gallery Image ${i + 1}`}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-body font-semibold text-sm">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Show More Button */}
      {visible < slides.length && (
        <div className="mt-12 flex justify-center">
          <Button onClick={showMore} kinds="outline" size="md">
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
