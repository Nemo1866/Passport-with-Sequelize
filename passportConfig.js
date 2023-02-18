const { compare } = require("bcrypt")
const localStrategy=require("passport-local")
const { User } = require("./config")

exports.passportInitialize=(passport)=>{
    passport.use(new localStrategy(async (username,password,done)=>{
        try {
            let user=await User.findOne({where:{username}})

            if(!user){
                return done(null,false)
            }
            let compareP=await compare(password,user.password)
            if(!compareP){
                return done(null,false)
            }
            return done(null,user)
        } catch (error) {
            return done(error,false)
        }
    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
    try {
    let user=await User.findOne({where:{id}})
    done(null,user)
    } catch (error) {
    done(error,false)
    }
    })

}


exports.isAuthenticated=(req,res,next)=>{
    if(req.user){
        next()
    }else{
        res.json({
            msg:"Please Authenticate in order to access our website"
        })
    }
}

