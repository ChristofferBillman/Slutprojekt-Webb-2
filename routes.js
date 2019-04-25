module.exports = function(app, port, connection) {

    var functions = require('./functions.js')
    var cookieParser = require('cookie-parser')
    app.use(cookieParser())

    // Index
    app.get('/', (req, res) => res.render('index'));
    app.listen(port, () => console.log("Listening on port " + port));

    // Home route
    app.get('/home', (req, res) => {
        functions.checkToken(connection, req.cookies.token, success => {
            if (success) {
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
            if (success) {
                res.render('settings', {
                    userContent: {} // User settings
                })
            } else {
                res.render('index')
            }
        })
    })
}
