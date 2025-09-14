import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'


function Gaming() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.gaming} Heading={"Gaming"}></ProductPage>
        </div>
    )
}

export default Gaming
