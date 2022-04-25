const firebase = require("firebase");
const config = require('../configs/firebase_config');

const firebaseDB = firebase.initializeApp(config.firebaseConfig);
module.exports = firebaseDB;