import React from 'react'
import Urls from '../assests/Urls'
import ProductPage from './ProductPage'

function Tanks() {
    return (
        <div className='mt-[15vh]'>
            <ProductPage URL={Urls.tanks} Heading={"tanks"}></ProductPage>
        </div>
    )
}

export default Tanks