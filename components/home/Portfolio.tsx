import React from 'react'
import GridLines from './grid/GridLines'
import Navbar from './sections/Navbar'
import Profile from './sections/Profile'
import Details from './sections/Details'
import Stack from './sections/Stack'
import About from './sections/About'

const Portfolio = () => {
  return (
    <>
     <div className="grid grid-cols-12 h-auto overflow-hidden ">
        <div className="hidden md:grid md:col-span-3 justify-end pr-1" >
            <GridLines/>
        </div>
        <div className="col-span-12 md:col-span-6 ">
            <Navbar/>
            <Profile/>
            <Details/>
            <Stack/>
            <About/>
          </div> 
        <div className="hidden md:grid md:col-span-3 pl-1">
              <GridLines/>
              
            </div> 

    </div>
    </>
  )
}

export default Portfolio