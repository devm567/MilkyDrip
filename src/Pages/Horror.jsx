import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Horror() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.horror} Heading={"Horror"}></ProductPage>
        </div>
    )
}

export default Horror
