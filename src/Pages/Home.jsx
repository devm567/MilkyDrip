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
                <div className='border-t-gray-300 mt-15'>
                    
                    <ProductPage URL={Urls['new-releases']} Heading={"18$ new-releases!"}></ProductPage>
                </div>

                <div className='border-t-gray-300 mt-15'>
                    
                    <ProductPage URL={Urls['top-picks']} Heading={"top-picks!"}></ProductPage>
                </div>
            </section>
        </>
    )
}

export default Home
