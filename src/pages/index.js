import * as React from "react"
// import { store } from '../store/store';
import { useSelector } from "react-redux";
import {increment, decrement, reset} from '../actions/counter-actions'
import { connect, useDispatch } from "react-redux";

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
      {/* <div>Data: {counterData}</div> */}
      <button onClick={() => { dispatch(increment(1)) }}>Increment</button>


      <h1 className="text-3xl font-bold underline text-red-200">
        Hello world!
      </h1>
     
    </main>
  )
}

export default IndexPage
