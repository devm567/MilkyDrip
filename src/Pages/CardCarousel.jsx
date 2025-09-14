 import React, { useRef } from "react";
 import { NavLink } from "react-router-dom";
 import "../Components/CardCarousel.css";


// IMPORT your 8 local images from src/assets


const cards = [
  { src: "https://images.pexels.com/photos/4009627/pexels-photo-4009627.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Gaming", slug: "gaming" },
  { src: "https://images.pexels.com/photos/25746374/pexels-photo-25746374.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Movies", slug: "movies" },
  { src: "https://images.pexels.com/photos/5408185/pexels-photo-5408185.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Horror", slug: "horror" },
  { src: "https://images.pexels.com/photos/33741385/pexels-photo-33741385.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Tv-Shows", slug: "tv-shows" },
  { src: "https://images.pexels.com/photos/30479724/pexels-photo-30479724.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Zodiac", slug: "zodiac" },
  { src: "https://images.pexels.com/photos/10464793/pexels-photo-10464793.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Other", slug: "Other" }

];



export default function Carousel() {
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".card");
    if (!card) return;
    const gap = parseInt(getComputedStyle(track).gap) || 20;
    const cardWidth = card.offsetWidth + gap;
    // scroll by 2 cards; change multiplier if you want
    track.scrollBy({ left: cardWidth * 2 * dir, behavior: "smooth" });
  };

  return (
    <>
      <h1 className="mt-15 styledFont text-4xl text-center" style={{fontSize:"40px"}}> Our Collections </h1>
      <div className="carousel-wrapper">
        <div>
          <button className="arrow left" onClick={() => scrollByCards(-1)} aria-label="Scroll left">
            ‹
          </button>
        </div>

        <div className="carousel-track" ref={trackRef}>
          {cards.map((c, i) => (
            <NavLink to={`/${c.slug}`} className="card-link" key={i}>
              <div className="card">
                <img src={c.src} alt={c.name} />
                <div className="overlay">
                  <div className="logo">{c.name}</div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
          <div className="m-3">

        <button className="arrow right" onClick={() => scrollByCards(1)} aria-label="Scroll right">
          ›
        </button>
          </div>
      </div>
    </>
  );
}
