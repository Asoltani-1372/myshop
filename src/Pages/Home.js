import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className="container"> 
            <Navbar />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />

        </div>
    </div>
  )
}

export default Home