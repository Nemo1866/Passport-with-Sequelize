const {Sequelize,DataTypes}=require("sequelize")
const sequelize=new Sequelize("murtaza","root","nimap123",{
host:"localhost",
dialect:"mysql",
logging:false
})

sequelize.authenticate().then(()=>{
    console.log("DB Connected");
}).catch(err=>{
    console.log("Error :"+err);
})


let User=require("./model")(sequelize,DataTypes)

sequelize.sync()

module.exports={User}