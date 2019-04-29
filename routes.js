module.exports = function(app, port, connection) {

    var functions = require('./functions.js')
    var cookieParser = require('cookie-parser')
    var colors = require('colors')
    app.use(cookieParser())

    // Index
    app.get('/', (req, res) => res.render('index'));
    var portString = port.toString()
    app.listen(port, () => console.log('[STATUS]'.black.bgWhite + ': ' + "Listening on port ".green + portString.green))

    // Home route
    app.get('/home', (req, res) => {
        functions.checkToken(connection, req.cookies.token, success => {
            var username = req.cookies.token.substr(0, req.cookies.token.lastIndexOf("_"))
            if (success) {
                console.log('[USER ACTIVITY]'.black.bgWhite + ': ' +  "User " + username + " went to home page.")
                res.render('home', {
                    userContent: {} // Posts
                })
            } else {
                res.render('index')
            }
        })
    })

    // Settings route
    app.get('/settings', (req, res) => {
        functions.checkToken(connection, req.cookies.token, success => {
            var username = req.cookies.token.substr(0, req.cookies.token.lastIndexOf("_"))
            if (success) {
                console.log('[USER ACTIVITY]'.black.bgWhite + ': ' +  "User " + username + " went to settings.")
                res.render('settings', {
                    userContent: {} // User settings
                })
            } else {
                res.render('index')
            }
        })
    })
}
