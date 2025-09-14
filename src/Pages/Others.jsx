import React, { useState } from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Others() {
    const [currentCategory, setCurrentCategory] = useState("animals");

    // 🔹 All categories with labels
    const categories = [
        { key: "animals", label: "ANIMALS" },
        { key: "foodie", label: "FOODIE" },
        { key: "funny", label: "FUNNY" },
        { key: "heroes-villains", label: "HEROES-VILLAINS" },
        { key: "magical", label: "MAGICAL" },
    ];

    return (
        <>
            {/* 🔹 Category Buttons */}
            <div className="mt-[15vh] flex justify-around items-center flex-wrap gap-4">
                {categories.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setCurrentCategory(key)}
                        className={`p-2 rounded font-bold text-2xl transition-all duration-200
                            ${currentCategory === key 
                                ? "bg-black text-white" 
                                : "bg-white text-black border-2 border-black hover:bg-neutral-700 hover:text-white"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* 🔹 Product Page */}
            <div className="mt-[5vh]">
                <ProductPage
                    URL={Urls[currentCategory]}
                    Heading={currentCategory}
                />
            </div>
        </>
    )
}

export default Others;
