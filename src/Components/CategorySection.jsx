import { NavLink } from "react-router-dom";

const categories = [
  {
    title: "Tees",
    image: "https://teefury.com/cdn/shop/files/tees_360x.jpg?v=1687250279",
    link: "/tees",
  },
  {
    title: "Hoodies",
    image: "https://teefury.com/cdn/shop/files/hoodies_360x.jpg?v=1687250278",
    link: "/hoodies",
  },
  {
    title: "Phone Cases",
    image: "https://teefury.com/cdn/shop/files/phone_cases_360x.jpg?v=1687250278",
    link: "/phone-cases",
  },
  {
    title: "Stickers",
    image: "https://teefury.com/cdn/shop/files/stickers_360x.jpg?v=1687250279",
    link: "/stickers",
  },
  {
    title: "Tanks",
    image: "https://teefury.com/cdn/shop/files/tanks_360x.jpg?v=1687250279",
    link: "/tanks",
  },
];

export default function CategorySection() {
  return (
    <>
        <h1 className="mt-4 styledFont text-4xl mb-2 ml-2" style={{fontSize:"28px"}}>OUR PRODUCTS!</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-2 bg-card-color">
        {categories.map((cat, i) => (
            <NavLink
            key={i}
            to={cat.link}
            className="relative flex flex-col items-center group cursor-pointer"
            >
            {/* Image wrapper with fixed ratio */}
            <div className="">
                <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
                />
            </div>

            {/* Button overlay */}
            <div className="absolute bottom-4 px-4 py-2 bg-black text-white rounded-full font-semibold text-sm flex items-center gap-2 transition duration-300 group-hover:opacity-90">
                {cat.title}
                <span className="text-lg">➔</span>
            </div>
            </NavLink>
        ))}
        </div>
    </>
  );
}
