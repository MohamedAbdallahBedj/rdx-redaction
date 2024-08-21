import React, { Suspense } from 'react'
import OrderUI from './OrderUI'
import NotFound from '@/components/NotFound'

const page = () => {
    return <main className="main">
        <div style={{
            width: '100%',
            height: 100,
            backgroundColor: '#0e1b4d'
        }}>

        </div>
        <Suspense fallback={<NotFound />}>
            <OrderUI />
        </Suspense>
    </main>
}

export default page