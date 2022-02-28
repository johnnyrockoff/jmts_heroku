const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/api/chars/all", async (req, res) => {
    try {
        const url = req.query.url.toString();
        const resp = await axios.get(url).then((response) => {return response}).catch((error) => console.log(error));
        res.json(resp.data);
    } catch(error) {
        console.log(error);
    }
});

app.get("/api/char/homeworld", async (req, res) => {
    try {
        const homeworldURL = req.query.url.toString();
        const resp = await axios.get(homeworldURL).then((response) => {return response}).catch((error) => console.log(error));
        res.json(resp.data);
    } catch(error) {
        console.log(error);
    }
});


app.get("/api/char/species", async (req, res) => {
    try {
        const speciesURL = req.query.url.toString();
        const resp = await axios.get(speciesURL).then((response) => {return response}).catch((error) => console.log(error));
        res.json(resp.data);
    } catch(error) {
        console.log(error);
    }
});

app.get("/api/char/films", async (req, res) => {
    try {
        const filmsURL = req.query.url.toString();
        const resp = await axios.get(filmsURL).then((response) => {return response}).catch((error) => console.log(error));
        res.json(resp.data);
    } catch(error) {
        console.log(error);
    }
});
app.get("/api/char/url", (req, res) => {});
app.get("/api/char/vehicles", (req, res) => {});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});