var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM tags", function (err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
      if (result[i].tagName === "Entertainment") {
        console.log(result[i].location);
      }
    }
  });
});
