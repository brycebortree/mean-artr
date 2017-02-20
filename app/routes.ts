var Art = require('./models/art');

module.exports = function(app){
    app.get('/api/nerds', function(req, res){
        Art.find(function(err, arts){
            if (err) 
                res.send(err);
            
            res.json(arts);
    });

    app.get('*', function(req, res){
        res.sendfile('./public/views/index.html');
    })
});
