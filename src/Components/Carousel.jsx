import { useState, useEffect, useRef } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";


export default function Carousel() {
  let slides = [
    {
      image: "https://images.pexels.com/photos/33853249/pexels-photo-33853249.jpeg",
      title: "Cool Graphic Tee",
      buttonText: "Shop Now",
      buttonLink: "https://www.google.com/",
    },
    {
      image: "https://images.pexels.com/photos/33814454/pexels-photo-33814454.jpeg",
      title: "Streetwear Style",
      buttonText: "Explore",
      buttonLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/1319828/pexels-photo-1319828.jpeg",
      title: "Abstract Design",
      buttonText: "Discover",
      buttonLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/8327550/pexels-photo-8327550.jpeg",
      title: "Vintage Collection",
      buttonText: "Buy Now",
      buttonLink: "#",
    },
  ];

  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

   // Go to previous slide
  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Start autoplay
  const startAutoPlay = () => {
    stopAutoPlay();
    slideInterval.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500); // 3s interval
  };

  // Stop autoplay
  const stopAutoPlay = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  // Start autoplay on mount
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []); // ✅ empty dependency, runs once

  return (
    <div
      className="overflow-hidden relative h-full"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slides wrapper */}
      <div
        className="flex transition-transform ease-out duration-700 h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative h-full">
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title || `Slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Text content */}
            <div className="absolute bottom-8 right-8 sm:bottom-16 sm:right-16 text-right z-20">
              {slide.title && (
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
              )}
              {slide.buttonText && (
                <a
                  href={slide.buttonLink}
                  className="inline-block mt-4 text-lg md:text-xl font-bold text-white uppercase tracking-widest border-b-2 border-white hover:border-gray-300 hover:text-gray-300 transition-all"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right arrows */}
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 sm:px-10 text-3xl z-30">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full z-30">
        {slides.map((_, i) => (
          <div
            key={"circle" + i}
            onClick={() => {
              setCurrent(i);
              stopAutoPlay();
            }}
            className={`rounded-full w-4 h-4 cursor-pointer transition-colors ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
