"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  test.init(
    {
      No: { type: DataTypes.STRING, primaryKey: true },
      Text: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "test",
      tableName: "2022년_09월_10일_19시_02분.csv",
    }
  );
  return test;
};
