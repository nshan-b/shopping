import * as React from "react";
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../../actions/counter-actions';
import { connect, useDispatch } from "react-redux";
import Navbar from "../../components/navbar";

const ClothesPage = (props) => {
    const dispatch = useDispatch();
    console.log('clothes props: ', props)

    return (
        <main>
            <Navbar />
        </main>
    );

}

export default ClothesPage;