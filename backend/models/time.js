"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class time extends Model {
    static associate(models) {}
  }
  time.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false },
      type: { type: DataTypes.STRING, primaryKey: true },
      text: DataTypes.STRING,
      count: DataTypes.INTEGER,
      year: DataTypes.FLOAT,
      month: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "time",
      tableName: "timelist",
    }
  );
  return time;
};
