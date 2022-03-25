import * as React from "react";
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../../actions/counter-actions';
import { connect, useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";

import { StaticQuery, graphql } from "gatsby";


const ShoesPage = (props) => {
    const dispatch = useDispatch();
    console.log('shoes props: ', props)

    return (
        <main>
            <Navbar />
            <StaticQuery
                query={
                graphql`
                    query ShoesQuery {
                        allContentJson (filter: { title: {eq: "all_data"}}){
                            nodes {
                            content {
                                name
                                price
                                uid
                                img_category
                                img_path {
                                childImageSharp {
                                    gatsbyImageData (
                                    width: 256
                                    height: 256
                                    )
                                }
                                }
                            }
                            }
                        }
                    }        
                `
                }
                render={data => (
                <>
                    <ul className="flex flex-row flex-wrap justify-center items-center">
                        {getShoes(data)}
                    </ul>
                </>
                )}
            />
        </main>
    );

}

const getShoes = (data) => {
    const shoes = []
    console.log('data for shoes: ', data)
    data.allContentJson.nodes[0].content.filter(item => item.img_category == "shoes").forEach(item => 
        shoes.push(
            <ProductCard 
                data={item.img_path.childImageSharp.gatsbyImageData} 
                text={item.name} 
                price={item.price} 
                uid={item.uid}
                category={item.img_category}
            />        
        )
    )
    return shoes;
}

export default ShoesPage;