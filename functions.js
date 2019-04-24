var exports = module.exports = {}
var md5 = require('md5')
var escape = require("sqlstring").escape

// Function to create token from username and password.
exports.createToken = (username, password)=> {
  token = username + '_' + md5(password)
  return token
}

// Function to compare and validate token. Checks db credentials to provided token. Returns true to callback if token is valid.
exports.checkToken = (connection, token, callback)=> {
  var username = token.substr(0, token.lastIndexOf("_"));
  var password = token.substr(token.lastIndexOf("_") + 1);
  connection.query("SELECT * FROM users WHERE username ="  + escape(username), (error, results) => {

    if(typeof callback === "function") {
      if (results.length > 0) {
        if (token == results[0].username + '_' + results[0].password) {
          callback(true)
          } else {
            callback(false)
        }
      } else {
        callback(false) 
      }
    }
    })
  }

exports.dbEmptyQuery = (connection, query)=> {
  connection.query(query)
  console.log('SQL Query successfully inserted.')
}

// User class, send to db when filled.
// Currently unused. Remove if not used in future.
exports.User = class {
  constructor(id, username, password, friends) {
    this.username = username;
    this.password = password;
    this.id = id;
    this.friends = friends;
  }
}