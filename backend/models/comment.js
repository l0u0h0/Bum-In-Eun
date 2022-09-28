"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.data, {
        foreignKey: "text",
      });
    }
  }
  comment.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      No: DataTypes.INTEGER,
      Time: DataTypes.STRING,
      Type: { type: DataTypes.STRING, allowNull: false },
      Text: { type: DataTypes.STRING, allowNull: false },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "comment",
      tableName: "tests",
    }
  );
  return comment;
};
