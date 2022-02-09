 const koa = require('koa')
 const koarouter= require('koa-router')
  const parser = require('koa-bodyparser')
 const mongo = require('../nkefe/Database/db')
const router=require('../nkefe/Router/route')



 const app = new koa()
 const Router= new koarouter()
 
app.use(parser())

 app.use(router.routes()).use(router.allowedMethods())
//  router.get("/",ctx=>{
//      ctx.body="we are running"
//  })


 app.listen(4000,()=>{
     console.log("port is running")
 })


//  app.use(router.routes()).use(router.allowedMethods())
