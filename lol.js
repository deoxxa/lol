var LOL = function LOL(lol, wat) {
    this.lol = lol;
    this.wat = wat;
};

LOL.prototype.toString = LOL.prototype.toJSON = function() {
    return this.lol;
};

var exclamations = {
    'lol': [
        '<l>augh <o>ut <l>oud',
    ],
    'rofl': [
        '<r>olling <o>n the <f>loor <l>aughing',
    ],
    'wtf': [
        '<w>hat <t>he <f>uck',
        '<w>ell <t>hat\'s <f>unny',
    ],
    'omg': [
        '<o>h <m>y <g>od',
    ],
    'omgwtfbbq': [
        '<o>h <m>y <g>od <w>hat <t>he <f>uck <b><b><q>',
    ],
};

var lols = Object.keys(exclamations).map(function(e) {
    return new LOL(e, exclamations[e]);
});

var length = lols.length;

module.exports = function lol() {
    var i = Math.floor(Math.random() * length, 10);
    return lols[i];
};
