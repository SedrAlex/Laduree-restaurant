import React from 'react'
import Main from '../../components/Main/Main'
import Header from '../../components/header/Header'
import AboutUs from '../../container/AboutUs/AboutUs'
import SpecialMenu from '../../container/SpecialMenu/SpecialMenu'
import Chef from '../../container/Chef/Chef'
import Intro from '../../container/Intro/Intro'
import Laurels from '../../container/Laurels/Laurels'
import Gallery from '../../container/Gallery/Gallery'
import Blog from '../../container/Blog/Blog'

const Restaurant = () => {
  return (
       <>
        <Main />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
       <Blog  />
       </>
    )
}

export default Restaurant