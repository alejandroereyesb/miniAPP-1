const routes = require('express').Router();
const multer = require('../configs/multer_config')
const upload = require('../middlewares/upload');

const { form, get, save } = require('../controllers/product_controller');

routes.get('/', get);

routes.get('/addproduct', form);
routes.post('/addproduct', multer.single("product_img"), upload, save);

module.exports = routes;