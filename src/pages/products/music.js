import * as React from "react";
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../../actions/counter-actions';
import { connect, useDispatch } from "react-redux";
import Navbar from "../../components/navbar";

import { StaticQuery, graphql } from "gatsby";

const MusicPage = (props) => {
    const dispatch = useDispatch();
    console.log('music props: ', props)

    return (
        <main>
            <Navbar />
            <StaticQuery
                query={
                graphql`
                    query AllDataQuery {
                        allContentJson (filter: { title: {eq: "all_data"}}){
                            nodes {
                            content {
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
                    <ul className="flex flex-row flex-wrap">
                        {getMusic(data)}
                    </ul>
                </>
                )}
            />
        </main>
    );
}

const getMusic = (data) => {
    const music = []
    console.log('music: ', data.allContentJson.nodes[0].content.filter(item => item.img_category == "music"))
    // data.allContentJson.nodes[0].content.forEach(item =>
    //     // cats.push(<CategoryCard data={item.img_path.childImageSharp.gatsbyImageData} text={item.img_text} category={item.img_category} />)
    // )
    return music;
}

export default MusicPage;