import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'


function Nostalgia() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.nostalgia} Heading={"Nostalgia"}></ProductPage>
        </div>
    )
}

export default Nostalgia
