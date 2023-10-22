const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const pkmRouter = require('./router/pkmRouter');
const userRouter = require('./router/userRouter');
require('dotenv').config();


const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true
})
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch(err => console.error(err));

    


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
    next();
});

app.use('/pkm', pkmRouter);
app.use('/user', userRouter);

module.exports = app;
