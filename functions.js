var exports = module.exports = {}
var md5 = require('md5')
var escape = require("sqlstring").escape

// For encryption of sensitive data.
exports.encrypt = ()=> {

}

// Function to create token from username and password.
exports.createToken = (username, password)=> {
  token = username + '_' + md5(password)
  return token
}

exports.checkToken = (connection, token, callback)=> {
  var username = token.substr(0, token.lastIndexOf("_"));
  var password = token.substr(token.lastIndexOf("_") + 1);
  connection.query("SELECT * FROM users WHERE username ="  + escape(username), (error, results) => {
      if(typeof callback === "function") {
          if (token == results[0].username + '_' + md5(results[0].password)) {
            return true
          } else {
            return false
          }
        }
    })
  }

exports.dbEmptyQuery = (connection, query)=> {
  connection.query(query)
  console.log('SQL Query successfully inserted.')
}

// User class, send to db when filled.
exports.User = class {
  constructor(id, username, password, friends) {
    this.username = username;
    this.password = password;
    this.id = id;
    this.friends = friends;
  }
}