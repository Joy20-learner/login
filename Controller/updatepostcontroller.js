const { updatepost } = require("../Database/query");

const updatepostcontroller=async(ctx)=>{
    const id=ctx.params.id;
    const {data} = ctx.state.shared
    const email=ctx.request.body.email;
    const title=ctx.request.body.title;
    const description=ctx.request.body.description;
    // const status=ctx.request.body.status;
    const up=await updatepost(id,{data,email,title,description})
    console.log(id)
    console.log(up)
    return ctx.body={success:true,message:"Data updated successfully"}
}
module.exports={updatepostcontroller}