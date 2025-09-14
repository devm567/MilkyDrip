import React from 'react'
import Carousel from '../Components/Carousel'
import CardCarousel from './CardCarousel'
import ProductPage2 from './ProductPage2'
import Urls from '../assests/Urls'
import CategorySection from '../Components/CategorySection'
import ServiceHighlights from '../Components/ServiceHighlights'

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
                    
                    <ProductPage2 URL={Urls['new-releases']} Heading={"18$ new-releases!"}></ProductPage2>
                </div>

                <div className='border-t-gray-300 mt-15'>
                    
                    <ProductPage2 URL={Urls['top-picks']} Heading={"top-picks!"}></ProductPage2>
                </div>
                <div className='mt-15'>
                    <CategorySection/>
                </div>
                <div className='mt-15'>
                    <ServiceHighlights/>
                </div>
            </section>
        </>
    )
}

export default Home
