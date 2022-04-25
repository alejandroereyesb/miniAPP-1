const productDB = require('../models/product_model');

// Trae los productos y los renderiza en la vista
const get = async (req, res) => {
    try {
        const allProducts = await productDB.getProducts();
        res.status(200).render('index', { show: 'list', list: allProducts });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

// Renderiza el formulario
const form = (req, res) => {
    try {
        res.render('index', { show: 'form' });
    } catch (error) {
        console.log(error);
    }
}

// Guarda en la base de datos
const save = async (req, res) => {
    try {
        let imgURL = req.file.firebaseUrl;
        await productDB.createPorduct(req.body, imgURL);
        res.status(201).render('index', { show: 'form' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports = {
    get,
    save,
    form
};