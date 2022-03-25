import * as React from "react";
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../../actions/counter-actions';
import { useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import { StaticQuery, graphql } from "gatsby";

const ClothesPage = (props) => {
    const dispatch = useDispatch();

    return (
        <main>
            <Navbar />
            <StaticQuery
                query={
                graphql`
                    query ClothesQuery {
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
                        {getClothes(data)}
                    </ul>
                </>
                )}
            />
        </main>
    );

}

const getClothes = (data) => {
    const clothes = []
    // console.log('data for clothes: ', data)
    data.allContentJson.nodes[0].content.filter(item => item.img_category == "clothes").forEach(item => 
        clothes.push(
            <ProductCard 
                data={item.img_path.childImageSharp.gatsbyImageData} 
                text={item.name} 
                price={item.price} 
                uid={item.uid}
                category={item.img_category}
            />        
        )
    )
    return clothes;
}


export default ClothesPage;