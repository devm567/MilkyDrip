import React from 'react'
import Carousel from '../Components/Carousel'
import CardCarousel from './CardCarousel'
import ProductPage from './ProductPage'
import Urls from '../assests/Urls'
function Home() {
    return (
        <>
            <section>
                <div className='w-full h-[90vh]'>
                    <Carousel></Carousel>
                </div>
                <div>
                    <CardCarousel></CardCarousel>
                </div>
                <div className='border-t-gray-300'>
                    
                    <ProductPage URL={Urls.gaming} Heading={"Gaming"}></ProductPage>
                </div>
            </section>
        </>
    )
}

export default Home
