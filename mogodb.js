const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/'
const database = 'LanguageDB'
const client = new MongoClient(url);

async function dbconnect(){
    let result = await client.connect()
    db = result.db(database);
    return db.collection('Languages')
} 

module.exports = dbconnect;