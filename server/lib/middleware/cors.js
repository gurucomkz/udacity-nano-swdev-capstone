'use strict';
module.exports = function(req, res, next) {
    //CORS!
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'accept, content-type');
    next();
};
