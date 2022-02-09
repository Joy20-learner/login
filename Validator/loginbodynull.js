

const loginbodynull = (ctx,next) =>{
    // console.log(ctx.request.body)
    try{
   
   // console.log(ctx.request.body)
    const email = ctx.request.body.email
    const pass = ctx.request.body.password

    if( email == undefined || pass == undefined)

    return ctx.body={success:false,message:"Fill all tabs"}
    return next()
    }
    catch(e){
        console.log(e);
    }
   
}

module.exports={loginbodynull}

