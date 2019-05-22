var exports = module.exports = {}
var md5 = require('md5')
var escape = require("sqlstring").escape
var mysql = require('mysql')
var secrets = require('./secrets.js')

// Function to create token from username and password.
exports.createToken = (username, password) => {
  token = username + '_' + md5(password)
  return token
}

// Connect to db.
var connection = mysql.createConnection(secrets.dbcredentials)

// Function to compare and validate token. Checks db credentials to provided token. Returns true to callback if token is valid.
exports.checkToken = (token, callback) => {
  var username = token.substr(0, token.lastIndexOf("_"));
  var password = token.substr(token.lastIndexOf("_") + 1);
  connection.query("SELECT * FROM users WHERE username =" + escape(username), (error, results) => {

    if (typeof callback === "function") {
      if (results.length > 0) {
        if (token === results[0].username + '_' + results[0].password) {
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

// Generates array of friends.
exports.genContent = (username, callback) => {
  exports.dbQuery("SELECT friends FROM users WHERE username =" + escape(username) + ";", (results) => {
    if (results[0].friends != null) {
      exports.dbQuery("SELECT * FROM users WHERE id in " + results[0].friends + ";", (results) => {
        callback(results)
      })
    } else {
      callback(false)
    }
  })
}

// Query to db.
exports.dbQuery = (query, callback) => {
  connection.query(query, (error, results) => {
    if (error) throw error
    if (results.length > 0) {
      callback(results)
    } else {
      callback([])
    }
  })
}