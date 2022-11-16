//Config inicial

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//forma de ler JSON / middlewares

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(cors());

// rotas da API

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


//rota inicial / endpoint

app.get('/', (req, res) => {

    res.json({ message: 'Oi express!' })

});


const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

//mongodb+srv://<USERNAME>:<PASSWORD>@apicluster.tayeddq.mongodb.net/<NOMEDOBANCO>?retryWrites=true&w=majority
//entregar uma porta

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.tayeddq.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Conectado ao MongoDB!')
    app.listen(3000);
})
.catch((err)=> console.log(err))

