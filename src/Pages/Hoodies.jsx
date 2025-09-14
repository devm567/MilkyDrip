import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Hoodies() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.hoodies} Heading={"hoodies"}></ProductPage>
        </div>
    )
}

export default Hoodies