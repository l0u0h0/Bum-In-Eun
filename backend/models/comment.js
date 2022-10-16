"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
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
      tableName: "comments",
    }
  );
  return comment;
};
