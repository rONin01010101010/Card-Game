import { sequelize } from '.';

const Game = require('./Game')
const Moves = require('./GameMove'); 
export default (sequelize, DataTypes) => {
     const User   = sequelize.define('User' , {
        
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true
        }, 
        score : {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            default: 0
        },
         email: { 
            type:DataTypes.STRING
        }
    
    })


User.HasMany(Moves); 
Moves.belongsTo(User , {
    foreignKey: 'UserId'
}); 

if(Game.Active == true) {
    //add game state in game model 
    User.HasOne(Game, {
        foreignKey: 'GameId'
    })
    User.sync()
}else{
    User.HasMany(Game)
    User.sync(); 
}

sequelize.sync({force:true}).then(() => {
   console.log('User Table created successfully');
}).catch((error) => {
   console.error('Unable to create table : ', error);
}); 

    module.exports = User; 
}