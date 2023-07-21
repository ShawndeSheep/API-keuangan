const sequelize = require("../database/conn")
require("dotenv").config();
const { Model, DataTypes } = require("sequelize");

const AccTranskas = sequelize.define('AccTranskas', {
  transoutid:{
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  notrans: {
    type: DataTypes.STRING,
  },
  outid: {
    type: DataTypes.BIGINT
  },
  pengajuan: {
    type: DataTypes.INTEGER
  },
  transtgl: {
    type: DataTypes.DATE
  },
  createdby: {
    type: DataTypes.INTEGER
  },
  createddate: {
    type: DataTypes.DATE
  },
  keterangan: {
    type: DataTypes.STRING
  },
  bebantgl: {
    type: DataTypes.DATE
  },
  nilaiuang: {
    type: DataTypes.DOUBLE
  },
  nomorfaktur: {
    type: DataTypes.STRING
  },
  supplierid: {
    type: DataTypes.BIGINT
  },
  loc: {
    type: DataTypes.STRING
  },
  accuserby: {
    type: DataTypes.INTEGER
  },
  accuserdate: {
    type: DataTypes.DATE
  },
  accuserstatus: {
    type: DataTypes.TINYINT
  },
  acc1by: {
    type: DataTypes.INTEGER
  },
  acc1date: {
    type: DataTypes.DATE
  },
  acc1status: {
    type: DataTypes.TINYINT
  },
  reject1id: {
    type: DataTypes.BIGINT
  },
  acc2by: {
    type: DataTypes.INTEGER
  },
  acc2date: {
    type: DataTypes.DATE
  },
  acc2status: {
    type: DataTypes.TINYINT
  },
  reject2id: {
    type: DataTypes.BIGINT
  },
  acc3by: {
    type: DataTypes.INTEGER
  },
  acc3date: {
    type: DataTypes.DATE
  },
  acc3status: {
    type: DataTypes.TINYINT
  },
  reject3id: {
    type: DataTypes.BIGINT
  },
  realisasi: {
    type: DataTypes.DOUBLE
  },
  no_document: {
    type: DataTypes.STRING
  }
},
{
  sequelize,
  modelName: "AccTranskas",
  tableName: process.env.DEV_TABLE,
  timestamps: false,
  timezone: "+07:00"
})

module.exports = AccTranskas;