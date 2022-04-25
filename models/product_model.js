const Product = require('./product_schema');

const getProducts = async () => {
    try {
        return await Product.find({});
    } catch (error) {
        throw error
    }
}

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