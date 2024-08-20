import React, { Suspense } from 'react'
import Order from './Order'

const page = () => {
    return (
        <Suspense fallback={<></>}>
            <Order />

        </Suspense>
    )
}

export default page