var exports = module.exports = {}
    // For encryption of sensitive data.
    exports.encrypt = function() {

    }
    
    // Function to create token from username and password.
    exports.createToken = function() {
      console.log('hej')
    }

    // User class, send to db when filled.
    exports.User = class {
      constructor(username, password) {
        this.username = username;
        this.password = password;
      }
    }