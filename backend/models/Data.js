module.exports = function (sequelize, DataTypes) {
  const Data = sequelize.define(
    "Data",
    {
      No: { type: DataTypes.STRING(50) },
      Data: { type: DataTypes.STRING(30) },
      Time: { type: DataTypes.DATE },
    },
    {
      freezeTableName: true,
      tableName: "data",
    }
  );

  return Data;
};
