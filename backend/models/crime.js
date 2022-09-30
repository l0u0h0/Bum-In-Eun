"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class crime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
