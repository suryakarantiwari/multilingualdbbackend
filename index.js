const express = require('express')
const client = require('./database')
require('dotenv').config();
const PORT = process.env.PORT || 3001

const app = express()

client.connect();

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });

app.get('/:lan', async(req,res) => {
    try{
        const lang_code = req.query.dist;
        const result = await client.query(`select lan_trans from translation_table where lan_code = '${lang_code}'`)
        const data = (await result).rows;
        res.send((data[0].lan_trans[0]));
    }
    catch(error){
        console.log(error);
    }
})


app.listen(PORT, ()=>{
    console.log("Server is running");
})

