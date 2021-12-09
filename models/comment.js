//sequelize model, datatypes and database connection
//

//const { Model, DataTypes } = require('sequelize');
//const sequelize = require('../config/connection');

//class Comment extends Model {}

//Comment.init(
  //{
    //id: {
      //  type: DataTypes.INTEGER,
        //primaryKey: true,
        //allowNull: false,
        //autoIncrement: true
      //},
      //user_id: {
        //type: DataTypes.INTEGER,
        //allowNull: false,
        //references: {
          //model: 'user',
          //key: 'id'
        //}
      //},
      //post_id: {
        //type: DataTypes.INTEGER,
        //allowNull: false,
        //references: {
          //model: 'post',
          //key: 'id'
       // }
      //},
      //comment_text: {
        //type: DataTypes.STRING,
        //allowNull: false,
        //validate: {
          //  len: [1]
        //}
     // }
  //},
 // {
   // sequelize,
    //freezeTableName: true,
    //underscored: true,
    //modelName: 'comment'
  //}
//);

//module.exports = Comment;



// Comment model

// Dependencies
// sequelize model, datatypes, and database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// the Comment model extends the sequelize model 
class Comment extends Model {}

// define the table columns and configuration, similar to the setup for the other models
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // comment must be at least one character long
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

// Export the model
module.exports = Comment;