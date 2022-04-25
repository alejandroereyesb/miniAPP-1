const Product = require('./product_schema');

// Trae todos los productos de la base de datos
const getProducts = async () => {
    try {
        return await Product.find({});
    } catch (error) {
        throw error
    }
}

// Crea un producto en la base de datos
const createPorduct = async (product, url) => {
    try {
        const newProduct = new Product(product);
        newProduct.image = url;
        await Product.create(newProduct);
    } catch (error) {
        throw error
    }
}

module.exports = {
    getProducts,
    createPorduct
}