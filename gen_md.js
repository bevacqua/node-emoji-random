'use strict';

var fs = require('fs');
var emoji = require('./emoji.json');

fs.writeFileSync(__dirname + '/all.md', emoji.names.map(function(name){
    return '`\'' + name + '\'` ' + name;
}).join(' '));