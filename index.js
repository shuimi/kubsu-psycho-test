require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index')
const mongoose = require('mongoose');
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use('/api', router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        mongoose.set('useFindAndModify', false);
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Server started on port ${ PORT }`)
        });
    } catch (exc) {
        console.log(exc);
    }
}

start().then();