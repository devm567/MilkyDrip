import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Tees() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.tees} Heading={"tees"}></ProductPage>
        </div>
    )
}

export default Tees