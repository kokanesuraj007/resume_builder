import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Home/Home.jsx'
import Makereseume from '../Makeresume/Makereseume.jsx'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/make_resume' element={<Makereseume/>}></Route>
    </Routes>
  )
}

export default AllRoutes