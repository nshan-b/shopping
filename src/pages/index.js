import * as React from "react";
// import { store } from '../store/store';
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../actions/counter-actions';
import { connect, useDispatch } from "react-redux";
import Navbar from "../components/navbar";

import {StaticQuery, graphql} from "gatsby";


import CategoryCard from "../components/category-card";
import shoes from '../images/shoes.jpg'
// data



// markup
const IndexPage = (props) => {
  const dispatch = useDispatch()
  console.log('props: ', props)
  // console.log('store: ', store)
  
  console.log('increment: ', increment)
  const counterData = useSelector(state => state.counterData);
  console.log('new counterData: ', useSelector(state => state.counterData))

  return (
    <main >
      <title>Home Page</title>
      <Navbar  />
      {/* <div>Data: {counterData}</div> */}
      <button onClick={() => { dispatch(increment(1)) }}>Increment</button>
      <button onClick={() => { dispatch(decrement(1)) }}>Decrement</button>
      <button onClick={() => { dispatch(reset()) }}>Reset</button>


      <h1 className="text-3xl font-bold underline text-red-200">
        Hello world!
      </h1>

      <StaticQuery
        query={
          graphql`
            query CategoryQuery {
              allContentJson (filter: { title: {eq: "category_data"}}){
                nodes {
                  content {
                    img_text
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
            <ul className="flex flex-row flex-wrap items-center justify-center ">
              {getCategories(data)}
            </ul>
          </>
        )}

      />

      {/* <CategoryCard data={shoes} text={"pairs to rule them all"}  /> */}

      
     
    </main>
  )
}

const getCategories = (data) => {
  const cats = []
  // data.allContentJson.nodes[0].content
  console.log('data', data.allContentJson.nodes[0])
  data.allContentJson.nodes[0].content.forEach(item =>
    cats.push(<CategoryCard data={item.img_path.childImageSharp.gatsbyImageData} text={item.img_text} category={item.img_category} />)
  )
  return cats;
  // data.allContentJson
}

export default IndexPage
