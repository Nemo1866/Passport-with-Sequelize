module.exports=(sequelize,DataTypes)=>{
    let User=sequelize.define("user",{
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
    
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:false
    })
    return User
}