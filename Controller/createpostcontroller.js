const { createpost } = require("../Database/query");

const createpostcontroller=async(ctx)=>{
    //const username=ctx.request.body.username;
    //const email=ctx.state.userdata.email
 // const pass = ctx.request.body.password;
 //const email=ctx.request.body.email
   const title = ctx.request.body.title
   const description= ctx.request.body.description
   const status = ctx.request.body.status || "incomplete"
    console.log(await createpost(title,description,status))
    return ctx.body={success:true,message:"Post created"}
}
module.exports={createpostcontroller}