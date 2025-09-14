import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Phonecases() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls["phone-cases"]} Heading={"phone-cases"}></ProductPage>
        </div>
    )
}

export default Phonecases