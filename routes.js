module.exports = function(app, port){

    // Index
    app.get('/', (req, res) => res.render('index'));
    app.listen(port, () => console.log("Listening on port " + port));

    // Feed route
    app.get('/home', (req, res) => {
        res.render('home', {
        });
    });

}
