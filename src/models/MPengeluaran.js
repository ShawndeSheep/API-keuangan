const sequelize = require("../database/conn")
const { Model, DataTypes } = require("sequelize");

const MPengeluaran = sequelize.define('MPengeluaran', {
  outid:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  coa: {
    type: DataTypes.STRING,
  },
  pengajuan: {
    type: DataTypes.TINYINT,
  },
},
{
  sequelize,
  modelName: "MPengeluaran",
  tableName: "accmasterpengeluaran",
  timestamps: false,
})

module.exports = MPengeluaran;