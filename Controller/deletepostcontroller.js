const { deletepost } = require("../Database/query")

const deletepostcontroller = async(ctx)=>{
    const title= ctx.request.body.title
    const description=ctx.request.body.description
    const del = await deletepost(title,description)
    return ctx.body={success:true,message:"Data deleted"}
}

module.exports=deletepostcontroller
