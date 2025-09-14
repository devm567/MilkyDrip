import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Stickers() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.stickers} Heading={"stickers"}></ProductPage>
        </div>
    )
}

export default Stickers