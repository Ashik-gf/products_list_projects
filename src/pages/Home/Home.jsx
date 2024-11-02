import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HeroSectios from '../../components/Hero/HeroSectios'
import Products from '../../components/Products/Products'


const Home = () => {

    return (
        <div>
            <Header />
            <HeroSectios />
            <Products />
            <Footer />
        </div>
    )
}

export default Home