const express = require("express");
const Sequelize = require('sequelize');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;

// Require
const conn = require("./src/database/conn");
const supplier = require('./src/routes/Supplier');

app.use(express.urlencoded({ extended: true }));
app.use("/api/",supplier);

//Connection
const initApp = async () => {
    console.log("Mencoba konek");
    try {
      await conn.authenticate();
      console.log("Berhasil konek");
      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
    } catch (error) {
      console.error("Gagal konek", error);
    }
};
  
initApp();