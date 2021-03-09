const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")('sk_test_51I42F8AbRAUu3f08PEev7VyaCYtaRJJpnrmS1T9Ig2P78ePuOLlmao7Xt2ykiOl2kPYxrKTM1dCaLjWLagc62STD00l6b35XpN')

// API

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request received BOOM!!🔥🔥', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "inr",
    });
    // ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-45306/us-central1/api