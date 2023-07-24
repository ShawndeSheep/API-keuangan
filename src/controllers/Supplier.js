const express = require("express");
const { Sequelize, Op } = require("sequelize");
const AccTranskas = require("../models/acctranskas");
const MPengeluaran = require("../models/MPengeluaran");
const Msup = require("../models/mastersupplier");
const moment = require('moment-timezone');


// Secret Key
const key = process.env.API_KEY;

// Post
const postTranskas = async (req, res) => {
  var api_key = req.header('x-keu-key');
  if(api_key == "" || api_key == undefined){
    return res.status(400).send({
      'message': 'Authentication required'
  })   
  }else if(api_key != key){
    return res.status(400).send({
      'message': 'Authentication Failed :('
  })   
  }else{

    var keterangan = req.body.keterangan;
    var nilai_uang = req.body.nilai_uang;
    var nomor_faktur = req.body.nomor_faktur;
    var kode_sup = req.body.supplier_id;
    var no_document = req.body.no_document;
    var coa = req.body.coa;

    if(keterangan == "" || nilai_uang == "" || nomor_faktur == "" || kode_sup == "" || no_document == "" || keterangan == undefined || nilai_uang == undefined || nomor_faktur == undefined || kode_sup == undefined || no_document == undefined){
      return res.status(400).send({
        'message': 'Pastikan semua field terisi'
    })   
    }else{

      // Cari out id dari coa
      var temp_find = await MPengeluaran.findAll({
        where: {
            coa: coa,
            pengajuan: 1
        }
      });

      if(temp_find.length == 0){
        return res.status(404).json({
          message: "COA not found",
        })
      }

      var out_id = temp_find[0].outid;

      // Cari supplier id
      var find_id = await Msup.findOne({
        where:{
          kodesupplier: kode_sup
        }
      })
      if(find_id == null){
        return res.status(404).json({
          message: "Supplier not found",
        })
      }else{
        var supplier_id = find_id.supplierid;
      }
      
      // Time Date Format
      var now = new Date();
      now.setHours(now.getHours() + 7);
      
      var year = now.getFullYear();
      var month = String(now.getMonth() + 1).padStart(2, '0');
      var day = String(now.getDate()).padStart(2, '0');
      var hours = String(now.getHours()).padStart(2, '0');
      var minutes = String(now.getMinutes()).padStart(2, '0');
      var seconds = String(now.getSeconds()).padStart(2, '0');
      var endday = new Date(year, now.getMonth() + 1, 0).getDate();       
      
      // Initializing value
      var pengajuan = 1;
      var transtgl = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      var createdby = 269; // Admin_BAS
      var createddate = transtgl;
      //console.log(createddate);
      var bebantgl = `${year}-${month}-${endday}`;

      var loc = 94; // BAS
      var accuserby = createdby;
      var accuserdate = createddate;
      var accuserstatus = 1;
      var acc1by = createdby
      var acc1date = createddate;
      var acc1status = 1;
      var realisasi = nilai_uang;

      // Post Database
      let create = await AccTranskas.create({
        outid: out_id,
        pengajuan: pengajuan,
        transtgl: transtgl,
        createdby: createdby,
        createddate: createddate,
        keterangan: keterangan,
        bebantgl: bebantgl,
        nilaiuang: nilai_uang,
        nomorfaktur: nomor_faktur,
        supplierid:supplier_id,
        loc: loc,
        accuserby: accuserby,
        accuserdate: accuserdate,
        accuserstatus: accuserstatus,
        acc1by: acc1by,
        acc1date:acc1date,
        acc1status: acc1status,
        realisasi: realisasi,
        no_document:no_document
      })

      // Check last ID
      var tempid;
      AccTranskas.max('transoutid').then(lastID => {
        tempid = lastID
      }).catch(err => {
        console.error('Error',err)
      });

      return res.status(200).json({
        message: "Data succesfully added",
        transoutid: tempid,
        create
      })
    }

  }
}

// Get
const getId = async (req, res) => {
  var id = req.params.id;

  // Find no document
  var temp_find = await AccTranskas.findAll({
    where: {
        no_document: id,
    }
  });
  if(temp_find.length > 0){
    return res.status(200).json({
      message: "Data found",
    })
  }else{
    return res.status(404).json({
      message: "Data not found",
    })
  }
}

// Export
module.exports = {
  postTranskas,
  getId
};
  