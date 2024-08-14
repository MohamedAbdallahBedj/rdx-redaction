import React from 'react'
const wilayas = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "OumElBouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "TiziOuzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "SidiBelAbbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M’sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "ElBayadh",
    "Illizi",
    "BordjBouArreridj",
    "Boumerdès",
    "ElTaref",
    "Tindouf",
    "Tissemsilt",
    "ElOued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "AïnDefla",
    "Naâma",
    "AïnTémouchent",
    "Ghardaïa",
    "Relizane",
    "ElMGhair",
    "ElMeniaa",
    "OuledDjellal",
    "BordjBadjiMokhtar",
    "BéniAbbès",
    "Timimoun",
    "Touggourt",
    "Djanet",
    "InSalah",
    "InGuezzam"
]


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
                    <p>
                        {product?.acf?.description}
                    </p>
                    <p>
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
                            <form
                                action="forms/contact.php"
                                method="post"
                                className="php-email-form"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <div className="row gy-4">
                                    <div className="col-md-12">
                                        <label className='mb-2' htmlFor="name">Nom et prénom</label>

                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Nom et prénom"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className='mb-2' htmlFor="phone">
                                            Numero de téléphone <small>(00-00-00-00-00)</small>

                                        </label>

                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Numero de téléphone"
                                            required
                                            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className='mb-2' htmlFor="wilaya">Wilaya</label>

                                        <select required className='form-select' name="wilaya" id="wilaya">
                                            {wilayas.map((item, index) => (
                                                <option key={`Wilaya ${index}`} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className='mb-2' htmlFor="quantite">Quantité</label>

                                        <select required className='form-select' name="quantite" id="quantite">
                                            {[1, 2, 3, 4, 5].map((item, index) => (
                                                <option key={`Quantite ${index}`} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className='mb-2' htmlFor="prix_total">Prix Total</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="prix_total"
                                            value="10000 Da"
                                            disabled
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className='mb-2' htmlFor="Addresse">Addresse</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="addresse"
                                            placeholder="Addresse"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">
                                            Your message has been sent. Thank you!
                                        </div>
                                        
                                        <button type="submit">Confirm order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* End Contact Form */}
                    </div>
                </div>
            </section>
        </main>

    )
}

export default page