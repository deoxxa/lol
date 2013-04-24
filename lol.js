var exclamations = [
    'lol',
    'rofl',
    'wtf',
    'OMG',
    'OMGWTFBBQ',
];
var length = exclamations.length;
var LOL = function LOL(lol, wat) {
    this.lol = lol;
    this.wat = wat;
};

LOL.prototype.toString = LOL.prototype.toJSON = function() {
    return this.lol;
};

module.exports = function lol() {
    var i = parseInt(Math.random()*length, 10);
    return exclamations[i];
};
