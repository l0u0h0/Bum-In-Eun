module.exports = function (sequelize, DataTypes) {
  const Data = sequelize.define(
    "Data",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      Data: { type: DataTypes.STRING, allowNull: false },
      Time: { type: DataTypes.DATE, allowNull: false },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      freezeTableName: true,
      tableName: "data",
    }
  );

  return Data;
};
