require("./config")
const express=require("express")
const app=express()
const router = require("./router")
const passport=require("passport")
const {passportInitialize, isAuthenticated}=require("./passportConfig")
const session=require("express-session")
const { createUser, login, welcome, logout } = require("./controller")



app.use(express.json())


passportInitialize(passport)
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())


app.post("/register",createUser)

app.post("/login",passport.authenticate("local"),login)

app.get("/welcome",isAuthenticated,welcome)

app.post("/logout",logout)


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})