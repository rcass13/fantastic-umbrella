const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

    //ProductTag

  // id
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

  // Integer

  // Doesn't allow null values

  // Set as primary key

  // Uses auto increment

  // product_id
  product_id:{
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id"
  }
  },

  // Integer

  // References the product model's id

  // tag_id
  tag_id:{
    type: DataTypes.INTEGER,
    // primaryKey: true,
    references: {
      model: "tag",
      key: "id",
     
  }
  }

  // Integer

  // References the tag model's id


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
