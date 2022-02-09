const { logindata } = require("../Database/query");
const { generatetoken } = require("../Helper/token");

const logincontroller=async(ctx)=>{
    // const username=ctx.request.body.username;
    const email=ctx.request.body.email
    const pass = ctx.request.body.password;
    const token=generatetoken({email})
    console.log(await logindata(email,pass))
    return ctx.body={success:true,message:token}
}
module.exports={logincontroller}