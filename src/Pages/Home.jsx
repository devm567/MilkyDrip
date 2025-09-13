import React from 'react'
import Carousel from '../Components/Carousel'
import CardCarousel from './CardCarousel'
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
            </section>
        </>
    )
}

export default Home
