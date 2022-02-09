// const data ={}
// const emailData  = email ? {email}:{}
// ctx.state.shared ={data :{...email}}

const isemailupdate= (ctx,next)=>{
    try{
        const email = ctx.request.body.email||""
    if (!email){
    ctx.body={success:false,message:"Enter email"}
    return}
    const emailData  = email ? {email}:{}
    ctx.state.shared ={ ...emailData}
    return next()
    }
    
        catch(e){

       console.log("error")
    }
   
}

module.exports=isemailupdate