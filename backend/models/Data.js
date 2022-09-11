module.exports = function (sequelize, DataTypes) {
  const Data = sequelize.define(
    "Data",
    {
      No: { field: "No", type: DataTypes.STRING(50) },
      Data: { field: "Data", type: DataTypes.STRING(30) },
      Time: { field: "time", type: DataTypes.DATE },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "Data",
    }
  );

  return Data;
};
