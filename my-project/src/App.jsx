import Nav from "./Components/Navbar/Nav.jsx"
import PriceList from "./Components/PriceList/PriceList.jsx"
import ReChart from "./Components/Chart/ReChart.jsx"
import Axios from "./Components/Axios/Axios.jsx"
import React from 'react'

const App = () => {
  return (
    <div>
    <Nav></Nav> 
    <PriceList></PriceList>
    <ReChart></ReChart>
    <Axios></Axios>
    </div>
     

    
  )
}

export default App;
