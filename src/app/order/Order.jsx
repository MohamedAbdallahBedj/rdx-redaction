'use client'
import React, { useEffect } from 'react'
import OrderForm from './OrderForm';
import { useSearchParams } from 'next/navigation';

import params from "@/app/params.json";
const { WP_API_URL } = params;

async function fetchItems(slug, setState) {
    const res = await fetch(
        `${WP_API_URL}/item?_fields=id,title,slug,%20acf&acf_format=standard&slug=${slug}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch items");
    }
    const [product] = await res.json();
    console.log(product)
    setState(product)
}

const Order = () => {
    const searchParams = useSearchParams()
    const slug = searchParams.get('item');
    const [state, setState] = React.useState({})
    console.log(state)

    useEffect(() => {
        fetchItems(slug, setState)
    }, [slug])

    return (
        <main className="main">
            <div style={{
                width: '100%',
                height: '100px',
                backgroundColor: '#0e1b4d'
            }}>

            </div>
            <section id="contact" className="contact section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Boutique</h2>
                    <p style={{ fontSize: '20px' }}>
                        {state?.acf?.description || ""}
                    </p>
                    <p style={{ fontSize: '20px' }}>
                        <strong>
                            {`Prix : ${state?.acf?.price || ""} Da`}
                        </strong>
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4 mt-1">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                            <img
                                alt='Item Pic'
                                src={state?.acf?.image || "/img/noimage.jpg"}
                                style={{ border: 0, width: "100%", height: 400, objectFit: 'contain' }}
                            />
                        </div>
                        {/* End Google Maps */}
                        <div className="col-lg-6">
                            <OrderForm product={state} />
                        </div>
                        {/* End Contact Form */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Order