"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  time.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
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
