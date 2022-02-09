const koarouter= require('koa-router')
const { createpostcontroller } = require('../Controller/createpostcontroller')
const deletepostcontroller = require('../Controller/deletepostcontroller')
const { logincontroller } = require('../Controller/logincontroller')
//const { append } = require('koa/lib/response')
const { signincontroller } = require('../Controller/signincont')
const { updatepostcontroller } = require('../Controller/updatepostcontroller')
//const { addsignupdata } = require('../Database/query')
const { bodynull } = require('../Validator/bodynull')
const emailvalidate = require('../Validator/emailvalidate')
const isdescriptionupdatevalidator = require('../Validator/isdescriptionupdatevalidator')
const isemailupdate = require('../Validator/isemailupdate')
const istitleupdatevalidator = require('../Validator/istitleupdatevalidator')
const { istokenverify } = require('../Validator/istokenverify')
const isusernameavail = require('../Validator/isusernameavail')
const { loginbodynull } = require('../Validator/loginbodynull')


const router = new koarouter()


router.post("/signin",bodynull,isusernameavail,signincontroller)

router.post("/login",loginbodynull,emailvalidate,logincontroller)

router.post("/createpost",istokenverify,createpostcontroller)

router.put("/updatepost/:id",istokenverify,isemailupdate,istitleupdatevalidator,isdescriptionupdatevalidator,updatepostcontroller)

router.delete("/deletepost",deletepostcontroller)


module.exports =router;


