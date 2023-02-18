const passport = require("passport")
const { createUser, login } = require("./controller")

const router=require("express").Router()


router.post("/register",createUser)
router.post("/login",passport.authenticate("local"),login)

module.exports=router