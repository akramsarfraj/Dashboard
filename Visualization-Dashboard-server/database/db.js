const { MongoClient } = require('mongodb');
const jsondata = require('../data/jsondata.json')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect()
.then(()=>{console.log("connected");})
.catch(()=>{console.log("error");})

async function findAll(){
    return result = await client.db('blackcoffer').collection('dashboard').find({},{ projection: { _id: 0} }).toArray();
   
}

async function save() {
    await client.db('Test').collection('test').insertMany(jsondata)
}

module.exports = {findAll,save}
