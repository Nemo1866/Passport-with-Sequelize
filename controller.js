const {User}=require("./config")
const {hash}=require("bcrypt")

module.exports={
    createUser:async(req,res)=>{

        let {username,email,password}=req.body
        let user =await User.findOne({where:{email}})
        if(user){
            res.json({
                msg:"Email Address Already Exist."
            })
        }else{
            let hashPassword=await hash(password,10)
            let result= await User.create({username,email,password:hashPassword})

            if(result){
                res.json({
                    msg:"Registered Sucessfully"
                })
            }else{
                res.json({
                    msg:"Sorry could not register user"
                })
            }
        }
    },login:async(req,res)=>{
        res.json({
            msg:"User Login Sucessfully"
        })
    },welcome:(req,res)=>{
res.json({
    msg:req.user
})
    },logout:async(req,res)=>{
        req.logout(function(err){
            if(!err){
                res.json({
                    msg:"Logout Sucessfully"
                })
            }else{
                res.json({
                    msg:err
                })
            }
        })
    }
}