"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class final_df extends Model {
    static associate(models) {}
  }
  final_df.init(
    {
      No: { type: DataTypes.INTEGER, primaryKey: true },
      tokenized_twitter: DataTypes.STRING,
      d_year: DataTypes.FLOAT,
      month: DataTypes.STRING,
      day: DataTypes.STRING,
      hour: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "final_df",
      tableName: "final_df",
    }
  );
  return final_df;
};
