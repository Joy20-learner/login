const istitleupdatevalidator =( ctx,next)=>{

    const title = ctx.request.body.title ||""
    if(!title){
        ctx.body={success:false,message:"Enter title"}
        return
    }
    const titledata= title?(title):{}
    ctx.state.shared={...titledata}
    return next()
}

module.exports=istitleupdatevalidator