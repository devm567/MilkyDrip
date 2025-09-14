import React from "react";
import { Link } from "react-router-dom";

function ServiceHighlights() {
  const services = [
    {
      title: "Worldwide Shipping",
      icon: "https://teefury.com/cdn/shop/files/ww_shipping_360x.png?v=1687250278", // replace with real icon
      link: "/shipping", // random link
    },
    {
      title: "Secure Payments",
      icon: "https://teefury.com/cdn/shop/files/secure_payment_360x.png?v=1687250278", // replace with real icon
      link: "/payments",
    },
    {
      title: "Shipped Locally",
      icon: "https://teefury.com/cdn/shop/files/shipped_locally_360x.png?v=1687250278", // replace with real icon
      link: "/local",
    },
  ];

   return (
    <div className="bg-black py-8">
      <div className="max-w-6xl mx-auto flex justify-around items-center">
        {services.map((service, i) => (
          <Link
            key={i}
            to={service.link}
            className="flex items-center gap-4 text-white hover:text-gray-300 transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          >
            {/* Circle Icon */}
            <img
              src={service.icon}
              alt={service.title}
              className="w-[120px] h-[120px] rounded-full object-cover"
            />

            {/* Text beside icon */}
            <span className="text-lg font-semibold whitespace-nowrap">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default ServiceHighlights;
