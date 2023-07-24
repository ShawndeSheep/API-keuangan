const sequelize = require("../database/conn")
const { Model, DataTypes } = require("sequelize");

const Msup = sequelize.define('Msup', {
  supplierid:{
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  kodesupplier: {
    type: DataTypes.STRING,
  },
},
{
  sequelize,
  modelName: "Msup",
  tableName: "mastersupplier",
  timestamps: false,
})

module.exports = Msup;