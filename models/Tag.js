const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns

    // Tag
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },

    // id
    
    // Integer
    
    // Doesn't allow null values
    
    // Set as primary key
    
    // Uses auto increment
    
    tag_name:{
      type: DataTypes.STRING
    }
    
    // String
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
