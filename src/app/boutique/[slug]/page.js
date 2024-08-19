import React from 'react'
import OrderForm from './OrderForm';


async function fetchItems(slug) {
    const res = await fetch(
        `${process.env.BASE_API_URL}/produits?_fields=id,title,slug,%20acf&acf_format=standard&slug=${slug}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch items");
    }
    return await res.json();
}

const page = async ({ params }) => {
    const [product] = await fetchItems(params.slug)
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
                        {product?.acf?.description}
                    </p>
                    <p style={{ fontSize: '20px' }}>
                        <strong>
                            {`Prix : ${product?.acf?.prix} Da`}
                        </strong>
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4 mt-1">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                            <img
                                src={product?.acf?.image_principale}
                                style={{ border: 0, width: "100%", height: 400, objectFit: 'contain' }}
                            />
                        </div>
                        {/* End Google Maps */}
                        <div className="col-lg-6">
                            <OrderForm product={product} />
                        </div>
                        {/* End Contact Form */}
                    </div>
                </div>
            </section>
        </main>

    )
}

export default page