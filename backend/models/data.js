"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    static associate(models) {
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
      count: { type: DataTypes.INTEGER, allowNull: false },
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
