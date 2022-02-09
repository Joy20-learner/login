const { isEmailnull } = require("../Database/query")
const { verifytoken } = require("../Helper/token")

const istokenverify=async(ctx,next)=>{
    const token=ctx.header.authorization
    if(!token)
        return ctx.body={status:false,message:"token expire"}
    const data=verifytoken(token)
    const userdata=await isEmailnull(data.email)
    if(!userdata)
        return ctx.body={status:false,message:"User not exist"}
    ctx.state.userdata    
    return next()
}

module.exports={istokenverify}