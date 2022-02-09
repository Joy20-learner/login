//const Validator = require('validator')
const {  isEmailnull} = require('../Database/query')

const emailvalidate= async(ctx,next)=>{
    const email = ctx.request.body.email
    const data = await isEmailnull(email)
    if(data== null)
    return ctx.body = {success:false ,message:"Sign in first"};
    return next()
}

module.exports=emailvalidate








// const emailvalidate=async(ctx,next)=>{
//     const email = ctx.request.body.email;
//     if (!Validator.isEmail(email)) {
//         ctx.body = {success:false,
//             message:"please Enter correct Email"}
//       }
//     else
//     {
//         const data = await logindata(email);
//         if (!data == null) {
//            return ctx.body = {success:false,message:"Email Not verified"};
//           }
//         else{
//             ctx.state.user=data;
//         }
//     }
//     return next()
// }









