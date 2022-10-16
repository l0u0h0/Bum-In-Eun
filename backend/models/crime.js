"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class crime extends Model {
    static associate(models) {}
  }
  crime.init(
    {
      No: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Text: DataTypes.STRING,
      Time: DataTypes.STRING,
      Type: DataTypes.STRING,
      Mean: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "crime",
      tableName: "crime",
    }
  );
  return crime;
};
