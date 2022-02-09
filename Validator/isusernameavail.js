const { checkusername } = require("../Database/query");

const isusernameavail = async (ctx,next)=>{
    const username= ctx.request.body.username
    const data=await checkusername(username)
    if (data != null)
      return ctx.body = {success:false ,message:"Enter new username"};
    return next()
}

module.exports=isusernameavail