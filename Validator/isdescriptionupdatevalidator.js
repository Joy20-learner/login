const isdescriptionupdatevalidator = (ctx,next)=>{
    const description= ctx.request.body.description 
    if(!description) {
        ctx.body={success:false,message:"Enter Description"}
         return  
    }
    const descriptiondata = description?(description):{}
    ctx.state.shared={...descriptiondata}
    console.log(descriptiondata)
    return next()
}

module.exports=isdescriptionupdatevalidator