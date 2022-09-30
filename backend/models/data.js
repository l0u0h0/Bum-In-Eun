"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      data.hasMany(models.comment, {
        foreignKey: "Type",
      });
    }
  }
  data.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true },
      text: { type: DataTypes.STRING, primaryKey: true },
      time: DataTypes.STRING,
      count: DataTypes.INTEGER,
      year: DataTypes.FLOAT,
      date: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "data",
    }
  );
  return data;
};
