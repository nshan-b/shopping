import React, {useState} from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useDispatch } from "react-redux";
import { addItem, removeItem, cartReset } from "../actions/cart-actions";

const ProductCard = ({data, text, price, uid}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <a
            className="bg-white p-6 rounded-lg shadow-lg m-4 relative flex flex-col justify-center"
        >
            <GatsbyImage className="opacity-50 w-full h-full" image={data} alt={text} />
            <span className="mb-0 mt-2 text-2xl font-bold">{text}</span>
            <span className="mb-0 mt-1 text-grey-dark text-lg italic">${price}</span>
            <div className="flex justify-between mt-4">
                <div class="inline-block relative w-16">
                    <select 
                        onChange={(e) => {
                            setQuantity(e.target.value);
                        }}
                        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('adding: ', price, uid, text, quantity);
                        dispatch(addItem({
                            uid: uid,
                            quantity: quantity,
                            price: price
                        }));
                    }}
                    className="h-10 rounded-sm bg-green-500 hover:bg-green-600 self-end"
                >
                    <span className="p-4 text-white font-light ">Add</span>
                    {/* <span className="text-white text-4xl font-medium">+</span> */}
                </button>
            </div>
            
            
        </a>
    )
}

export default ProductCard;