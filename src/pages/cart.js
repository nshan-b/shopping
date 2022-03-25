import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import Navbar from "../components/navbar";
import { StaticQuery, graphql } from "gatsby";
import CartItem from "../components/cart-item";

const CartPage = (props) => {
    const dispatch = useDispatch();
    const [totals, setTotals] = useState({});


    useEffect(() => {
        setTotals(calcTotal(props.cartData))
    }, [props])

    // useEffect(() => {
    //     // console.log('totals changed', totals)
    // }, [totals])

    if (props.cartData.length == 0) {
        return (
            <main>
                <title>Cart</title>
                <Navbar />
                <p className="font-light text-2xl mx-4 mt-8 text-center text-gray-500">Your shopping cart is empty!</p>
            </main>
        );
    }

    return (
        <main>
            <title>Cart</title>
            <Navbar />

            <div className="flex justify-evenly mt-8">
                <div className="flex flex-col items">
                    {props.cartData.map(item => {
                        return(<CartItem data={item.img_path} text={item.name} price={item.price} uid={item.uid} count={item.count} />)
                    })}
                </div>


                <div className="flex flex-col p-8 bg-slate-100 shadow-md border border-zinc-200 rounded-sm w-1/3 justify-center mr-8">
                    <h2 className=" mx-2 mb-4 font-semibold text-xl">Order summary</h2>
                    <div className="flex flex-row border-b border-slate-200 justify-between">
                        <p className="text-base text-gray-600 m-2">Subtotal</p>
                        <p className="m-2 font-bold">${totals.subtotal}</p>
                    </div>
                    <div className="flex flex-row border-b border-slate-200 justify-between mt-4">
                        <p className="text-base text-gray-600 m-2">Shipping</p>
                        <p className="m-2 font-bold">${totals.shipping}</p>
                    </div>
                    <div className="flex flex-row border-b border-slate-200 justify-between mt-4">
                        <p className="text-base text-gray-600 m-2">Tax</p>
                        <p className="m-2 font-bold">${totals.tax}</p>
                    </div>
                    <div className="flex flex-row justify-between mt-4 ">
                        <p className="m-2 font-bold">Total</p>
                        <p className="m-2 font-bold">${totals.total}</p>
                    </div>
                    <div className="flex justify-end mt-8">
                        <button 
                            className="w-32 p-3 h-auto hover:bg-blue-600 bg-blue-500 text-white text-base rounded-sm"
                            onClick={(e) => {

                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            
        </main>
    );
}



const calcTotal = (data) => {
    let sum = 0;
    let shipping = 12.99;
    let tax = 0.0725;

    for (let i = 0; i < data.length; i++) {
        sum += (data[i].price * data[i].count)
    }

    // Don't actually do float stuff - use a legit bignum library in an actual app :)
    return {
        subtotal: sum.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: parseFloat(sum * tax).toFixed(2),
        total: parseFloat(sum + shipping + (sum * tax)).toFixed(2)
    }
}

const mapStateToProps = (state) => {
    const { cartData } = state;
    return {
        cartData: cartData
    }
}

export default connect(mapStateToProps)(CartPage);