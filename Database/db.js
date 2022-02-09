
// const { MongoClient } = require("mongodb");

// const url =
//    "mongodb+srv://joy_social:joysocial123@cluster0.btlbi.mongodb.net/test";

// //const client = MongoClient;
// //let mongoClient = new MongoClient(url,{});
// const client = new MongoClient(url,{})

// // mongoClient = new MongoClient(url,{});
// client
//   .connect()
//   .then(() => console.log("DB connected successfully"))
//   .catch((e) => console.log("error" + e));
// // const mongoDB=mongoClient
// module.exports=client;



const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://joy_social:joysocial123@cluster0.btlbi.mongodb.net/test";

const conn = MongoClient;
let mongoClient = new MongoClient(url,{});
mongoClient
  .connect()
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log("error" + e));
const mongoDB=mongoClient
module.exports=mongoDB;