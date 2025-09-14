import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Zodiac() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.zodiac} Heading={"Zodiac"}></ProductPage>
        </div>
    )
}

export default Zodiac
