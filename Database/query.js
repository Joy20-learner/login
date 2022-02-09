const mongoclient= require('../Database/db')
const {ObjectId} = require('mongodb')

const isEmailnull = (email)=> mongoclient.db("store").collection("crud").
findOne({email:email})


const addsignupdata = (username,email,password)=> mongoclient.db("store").collection("crud").
insertOne({username:username,email:email,password:password})


const checkusername= (username)=> mongoclient.db("store").collection("crud").
findOne({username:username})

const logindata= (email,password)=>mongoclient.db("store").collection("crud").
findOne({email:email,password:password})

const createpost = (title,description,status)=> mongoclient.db("store").collection("post").
insertOne({title:title,description:description,status:status})


 const updatepost = (_id,data) =>mongoclient.db("store").collection("post").
 updateOne({_id :ObjectId(_id)},   { $set: data })


 const deletepost = (title,description)=> mongoclient.db("store").collection("post").
 deleteOne({title,description})


module.exports={isEmailnull,addsignupdata,checkusername,logindata,createpost,updatepost,deletepost}