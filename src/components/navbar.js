import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import '../styles/navbar.css';
import logo from '../images/++shopping_logo.svg'

import { FaSearch } from "@react-icons/all-files/fa/FaSearch"


const Navbar = (props) => {
    console.log('navbar props? ', props)
    return (
        <nav
            className="nav-primary-bg nav-text px-4 py-4"
        >
            <div className="flex w-full">
                {/* Logo */}
                <div className="flex items-center justify-center shrink-0" style={{minWidth: "25%"}}>
                    <a href="#" class="">
                        <img src={logo} class="mr-3 h-6 " alt="++shopping logo"/>
                        {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </a>
                </div>

                {/* Search Bar */}
                <div class="flex relative text-black justify-center flex-grow">
                    <input class="bg-white h-12 px-5 pr-64 text-md focus:outline-none rounded-tl-lg rounded-bl-lg 
                        placeholder-gray-400 font-medium placeholder:font-light"
                    type="search" name="search" placeholder="Search" />
                    <button
                        className="flex items-center justify-center w-12 nav-secondary-bg secondary-hover focus:outline-none rounded-tr-lg rounded-br-lg   "
                    >
                         <FaSearch size={16} color={"white"} className={""}  />
                    </button>
                    {/* <button type="submit" 
                        style={{backgroundColor: "#f59b9b", minWidth: "3rem" }} 
                        className="w-12 bg-white flex items-center justify-center hover:bg-black hover:text-white">
                        <FaSearch size={16} color={"white"} className={""}  />
                    </button> */}
                </div>

                {/* Remainder */}
                <div className="" style={{minWidth: "300px"}}></div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    const { counterData } = state;
    return { counterData: counterData }
}

export default connect(mapStateToProps)(Navbar)