require('dotenv').config();

const admin = require("firebase-admin");

// Como en el repositorio de Heroku no existe "service-account.json", creo el archivo .profile, que se ejecuta al iniciarse la app.
// Este archivo crea el "service-account.json" en el repositorio y lo rellena con mis credenciales, guardadas previamente en una Config Var de Heroku
const serviceAccount= require('../service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

module.exports = bucket;