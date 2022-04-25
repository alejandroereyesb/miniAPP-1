const express = require('express');
const helmet = require('helmet');

const connectMongoDB = require('./configs/mongo_config');
const productsRouter = require('./routes/app_route');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', productsRouter);


const listen = async () => {
    try {
        await connectMongoDB();

        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}

listen();