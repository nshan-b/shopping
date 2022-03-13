import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CategoryCard = ({data, text}) => {
    return (
        <div className="relative h-64 w-64 bg-gray-800 opacity-80 hover:opacity-90 cursor-pointer m-4 shadow-2xl border-2  border-slate-400">
            <GatsbyImage className="opacity-50 w-full h-full" image={data} alt={text} />
            <div 
                className="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold w-full h-auto text-xl"
            >
                {text}
            </div>
        </div>
    )
}

export default CategoryCard;