const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE filmes (id INTEGER PRIMARY KEY, titulo TEXT, duracao INTEGER)");
  db.run("INSERT INTO filmes (titulo, duracao) VALUES ('Matrix', 136), ('Interestelar', 169)");
});

module.exports = db;