const express = require('express')
const router = express.Router();

const fs = require("fs");

const dataPath = './Data/users.json'

router.get("/",  (req, res) => {
   fs.readFile(dataPath, "utf8",  (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

module.exports = router