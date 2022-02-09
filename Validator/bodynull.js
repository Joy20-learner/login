

const bodynull = (ctx,next) =>{
    // console.log(ctx.request.body)
    try{
     const username = ctx.request.body.username
   // console.log(ctx.request.body)
    const email = ctx.request.body.email
    const pass = ctx.request.body.password

    if(username == undefined || email == undefined || pass == undefined)

    return ctx.body={success:false,message:"Fill all tabs"}
    return next()
    }
    catch(e){
        console.log(e);
    }
}

module.exports={bodynull}

