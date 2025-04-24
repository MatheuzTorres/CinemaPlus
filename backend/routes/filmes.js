const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all("SELECT * FROM filmes", [], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

module.exports = router;