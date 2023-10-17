const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const pkmRouter = require('./router/pkmRouter');
const userRouter = require('./router/userRouter');


const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/pkm', pkmRouter)



mongoose.connect('mongodb+srv://anthony:mongodb@cluster0.104tymt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(() => {
        console.log('MongoDB Connected');
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
