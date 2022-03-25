import * as React from "react";
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../../actions/counter-actions';
import { useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import { StaticQuery, graphql } from "gatsby";

const ElectronicsPage = (props) => {
    const dispatch = useDispatch();

    return (
        <main>
            <Navbar />
            <StaticQuery
                query={
                graphql`
                    query ElectronicsQuery {
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
                        {getElectronics(data)}
                    </ul>
                </>
                )}
            />
        </main>
    );

}

const getElectronics = (data) => {
    const electronics = []
    // console.log('data for electronics: ', data)
    data.allContentJson.nodes[0].content.filter(item => item.img_category == "electronics").forEach(item => 
        electronics.push(
            <ProductCard 
                data={item.img_path.childImageSharp.gatsbyImageData} 
                text={item.name} 
                price={item.price} 
                uid={item.uid}
                category={item.img_category}
            />        
        )
    )
    return electronics;
}


export default ElectronicsPage;