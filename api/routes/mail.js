const app = require("express").Router();
const { getQueryResults } = require("../db");
const { createContactFormMessage, sendMail, createOrderFormMessage } = require("../lib/nodemailer");

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


app.post('/', async function (req, res) {
    try {
        const { name, email, subject, message } = req.body;
        if (!(name && email && subject && message)) return res.status(400).json({ message: "Echec... Informations incomplètes." });

        const messageContent = createContactFormMessage(name, email, subject, message);
        await sendMail(process.env.CONTACT_MAIL, subject, messageContent, 'contact');

        const queryTxt = `INSERT INTO wp_contacts (name, email, subject, message) VALUES ('${name}', '${email}', '${subject}', '${message}');`;
        await getQueryResults(queryTxt);
        return res.json({ message: 'Votre demande de contact a été enregistrée avec succès.' });

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Il y a un problème avec le serveur. Veuillez réessayer plus tard.' });
    }

});


app.post('/order', async function (req, res) {
    try {
        const { name, phone, wilaya, product, quantity, addresse } = req.body;
        if (!(name && phone && wilaya && product && quantity && addresse)) return res.status(400).json({ message: "Echec... Informations incomplètes." });

        const result = await fetch(
            `${process.env.WP_API_URL}/produits?_fields=id,title,slug,%20acf&acf_format=standard&slug=${product}`
        );
        if (!result.ok) {
            throw new Error("Failed to fetch items");
        }
        const [row] = await result.json();

        const messageContent = createOrderFormMessage(name, phone, wilayas[wilaya - 1], row, quantity, addresse);
        await sendMail(process.env.ORDER_MAIL, wilaya, messageContent, 'order');

        const queryTxt = `INSERT INTO wp_orders (name, phone, wilaya, product, quantity, addresse) VALUES ('${name}', '${phone}', '${wilaya}', '${row?.title?.rendered}', '${quantity}', '${addresse}');`;
        await getQueryResults(queryTxt);
        return res.json({ message: 'Votre demande de contact a été enregistrée avec succès.' });

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Il y a un problème avec le serveur. Veuillez réessayer plus tard.' });
    }

});



module.exports = app;