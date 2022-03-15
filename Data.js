var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://cluster0.ax14f.mongodb.net/haiku%22%20--username%20NatonCai";
const client = new MongoClient(url);

async function sendtodb(Newuser){
    try {
        await client.connect();
        const database = client.db("user");
        const accounts = database.collection("accounts");

        const result = await accounts.insertOne(Newuser);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
      } finally {
        await client.close();
      }
    }
module.exports ={sendtodb}