"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class final_df extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
