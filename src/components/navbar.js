import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import '../styles/navbar.css';
import logo from '../images/++shopping_logo.svg'

import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
import { Link } from "gatsby"



const Navbar = (props) => {
    console.log('navbar props? ', props)
    return (
        <nav
            className="nav-primary-bg nav-text px-4 py-4"
        >
            <div className="flex flex-row justify-around items-center w-full">
                {/* Logo */}
                <div className="flex items-center justify-center mx-2 shrink-0">
                    <Link to="/" className="">
                        <img src={logo} className="mr-3 h-6 " alt="++shopping logo"/>
                        {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex relative text-black justify-center mx-2">
                    <input className="bg-white h-12 px-5 pr-48 text-md focus:outline-none rounded-tl-lg rounded-bl-lg 
                        placeholder-gray-400 font-medium placeholder:font-light"
                    type="search" name="search" placeholder="Search" />
                    <button
                        className="flex items-center justify-center w-12 nav-secondary-bg secondary-hover focus:outline-none rounded-tr-lg rounded-br-lg   "
                    >
                         <FaSearch size={16} color={"white"} className={"w-40"}  />
                    </button>
                    {/* <button type="submit" 
                        style={{backgroundColor: "#f59b9b", minWidth: "3rem" }} 
                        className="w-12 bg-white flex items-center justify-center hover:bg-black hover:text-white">
                        <FaSearch size={16} color={"white"} className={""}  />
                    </button> */}
                </div>

                {/* Remainder */}
                <div className="flex mx-2 ">
                    <button
                        className="relative"
                    >
                        <div 
                            className="flex flex-row items-center justify-center px-2.5 py-1 rounded text-white text-lg font-light bg-white"
                        >
                            <FaShoppingCart className="ml-2 text-pink-900" size={14} color={""} />
                            <span className="mx-2 text-pink-900">Cart</span>
                        </div>
                        {props.counterData > 0 && props.counterData <= 9 ? 
                            <span className="absolute bg-red-700 px-2 py-1 text-xs font-bold rounded-full -top-2 -right-4 cursor-default">
                                {props.counterData && props.counterData > 0 ? (props.counterData > 99 ? "99+" : props.counterData) : null}
                            </span>
                        : null}
                        {props.counterData > 9 ? 
                            <span className="absolute bg-red-700 px-2 py-1 text-xs font-bold rounded-full -top-2 -right-5 cursor-default">
                                {props.counterData && props.counterData > 0 ? (props.counterData > 99 ? "99+" : props.counterData) : null}
                            </span>
                        : null}
                        
                    </button>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    const { counterData, cartData } = state;
    return { counterData: counterData, cartData: cartData }
}

export default connect(mapStateToProps)(Navbar)