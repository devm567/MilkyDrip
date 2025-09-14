import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Movies() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.movies} Heading={"Movies"}></ProductPage>
        </div>
    )
}

export default Movies
