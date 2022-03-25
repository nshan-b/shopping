import React from "react";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";


import { StaticQuery, graphql, Link, navigate } from "gatsby";


const SearchPage = (props) => {
    console.log('props for search: ', props)
    return (
        <main>
            <Navbar />
            <StaticQuery
                query={
                graphql`
                    query AllContent {
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
                        {search(data, props.location.state.query)}
                    </ul>
                </>
                )}
            />
        </main>
    );
}

const search = (data, q) => {
    const search = []
    console.log('data for search: ', data)
    console.log('query for search: ', query)
    let query = q.toString()

    if (query) {
        data.allContentJson.nodes[0].content.filter(item => 
            (item.name.toUpperCase().trim().includes(query.toUpperCase().trim()) || item.img_category.toUpperCase().trim().includes(query.toUpperCase().trim())))
                .forEach(item => 
                    search.push(
                        <ProductCard 
                            data={item.img_path.childImageSharp.gatsbyImageData} 
                            text={item.name} 
                            price={item.price} 
                            uid={item.uid}
                            category={item.img_category}
                        />
                    )
                )
    }
    else {
        data.allContentJson.nodes[0].content.forEach(item => 
            search.push(
                <ProductCard 
                    data={item.img_path.childImageSharp.gatsbyImageData} 
                    text={item.name} 
                    price={item.price} 
                    uid={item.uid}
                    category={item.img_category}
                />
            )
        )
    }
    
    return search;
}

export default SearchPage;