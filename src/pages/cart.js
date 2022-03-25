import React, {useEffect} from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import Navbar from "../components/navbar";
import { StaticQuery, graphql } from "gatsby";
import CartItem from "../components/cart-item";

const CartPage = (props) => {
    const dispatch = useDispatch();
    console.log('cart props: ', props)

    useEffect(() => {
        console.log('changing')
    }, [])

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
                        <p className="m-2 font-bold">$19.99</p>
                    </div>
                    <div className="flex flex-row border-b border-slate-200 justify-between mt-4">
                        <p className="text-base text-gray-600 m-2">Shipping</p>
                        <p className="m-2 font-bold">$19.99</p>
                    </div>
                    <div className="flex flex-row border-b border-slate-200 justify-between mt-4">
                        <p className="text-base text-gray-600 m-2">Tax</p>
                        <p className="m-2 font-bold">$19.99</p>
                    </div>
                    <div className="flex flex-row justify-between mt-4 ">
                        <p className="m-2 font-bold">Total</p>
                        <p className="m-2 font-bold">$111.00</p>
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


// const getAllCartData = (data) => {
//     const cart = []
//     console.log('data for cart: ', data)
//     data.allContentJson.nodes[0].content.forEach(item => 
//         cart.push(
//             <CartItem data={item.img_path.childImageSharp.gatsbyImageData} text={item.name} price={item.price} uid={item.uid} />
//         )
//     )
//     return cart;
// }

const mapStateToProps = (state) => {
    const { cartData } = state;
    return {
        cartData: cartData
    }
}

export default connect(mapStateToProps)(CartPage);