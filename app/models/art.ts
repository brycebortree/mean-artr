var mongoose = require('mongoose');

module.exports = mongoose.model('Art', {
    twitUser : {type : String, default: ''},
    query : {type : String, default: ''},
    tweet : {type : String, default: ''},
    imageUrl : {type : String, default: ''},
    userId : {type : Number, default: 0}
})