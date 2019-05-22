module.exports = function(app, connection) {

    var secrets = require('./secrets.js')
    var functions = require('./functions.js')
    var mysql = require('mysql')
    var cookieParser = require('cookie-parser')
    var colors = require('colors')
    var port = secrets.port
    app.use(cookieParser())

    var connection = secrets.dbcredentials

    // Index
    app.get('/', (req, res) => res.render('index'));
    var portString = port.toString()
    app.listen(port, () => console.log('[STATUS]'.black.bgWhite + ': ' + "Listening on port ".green + portString.green))

    // Home route
    app.get('/home', (req, res) => {
        functions.checkToken(req.cookies.token, success => {
            var username = req.cookies.token.substr(0, req.cookies.token.lastIndexOf("_"))
            if (success) {
                console.log('[USER ACTIVITY]' + ': ' +  "User " + username + " went to home page.");
                functions.genContent(username, results => {
                    if (results) {
                        res.render('home', {
                            users: results 
                        })
                    } else {
                        res.render('home', {
                            users: ""
                        })
                    }
                })
            } else {
                res.render('index')
            }
        })
    })

    // Settings route
    app.get('/settings', (req, res) => {
        functions.checkToken(req.cookies.token, success => {
            var username = req.cookies.token.substr(0, req.cookies.token.lastIndexOf("_"))
            if (success) {
                console.log('[USER ACTIVITY]' + ': ' +  "User " + username + " went to settings.")
                res.render('settings', {
                    userContent: {} // User settings
                })
            } else {
                res.render('index')
            }
        })
    })
}
