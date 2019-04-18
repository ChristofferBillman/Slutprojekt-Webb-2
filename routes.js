module.exports = function(app, port, connection){
    var functions = require('./functions.js')

    // Index
    app.get('/', (req, res) => res.render('index'));
    app.listen(port, () => console.log("Listening on port " + port));

    // Home route
    app.get('/home', (req, res) => {
        functions.checkToken(connection, req.auth, results => {
            if (results) {
                res.render('home', {
                    userContent: {} // Some object
                })
            } else {
                /*res.render('autherror', {

                })*/
            }
        })
    })

    // Settings route
    app.get('/settings', (req, res) => {
        res.render('settings', {
        })
    })

}
