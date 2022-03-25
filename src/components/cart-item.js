import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useDispatch } from "react-redux";
import { addItem, removeItem, cartReset, setCount } from "../actions/cart-actions";



const CartItem = ({data, text, price, uid, category, count}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(count);

    useEffect(() => {
        // Trigger set-count
        dispatch(setCount({
            uid: uid,
            quantity: quantity
        }))
    }, [quantity])

    return (
        <div 
            style={{
                width: "auto"
            }}
            className="flex shrink items-center justify-between shadow-md border border-gray-100 m-4 rounded-sm h-44 p-8"
        >
            <GatsbyImage className="opacity-50 w-32 h-32 rounded-full p-4 m-4" image={data} alt={text} />
            <div className="mr-10">
                <p className="text-gray-900 leading-none font-bold text-xl mx-2">{text}</p>
                <p className="text-gray-600 leading-none text-sm m-2">${price}</p>
                {/* <p className="text-gray-600 leading-none text-sm m-2">Category: {count}</p> */}
            </div>
            <div className="flex items-start flex-col p-4 m-4 inline-block relative mx-auto">
                <p className="text-gray-600 leading-none text-base mb-2 mt-2 font-bold">Quantity</p>
                <select
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                    className="block bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div 
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeItem({
                        uid: uid,
                        quantity: quantity
                    }));
                }}
                className="ml-10 font-light hover:font-base hover:cursor-pointer text-purple-500 hover:text-purple-600"
            >
                Remove
            </div>
            
        </div>
    )

}

export default CartItem