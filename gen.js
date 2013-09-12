'use strict';

var fs = require('fs');
var async = require('async');
var sp = require('child_process').spawn;
var emoji = require('./emoji.json');

async.eachSeries(emoji.names, function(name, next){

    fs.writeFileSync(__dirname + '/all/' + name.replace(/:/, ''), name);

    var git = sp('git', ['add', '.']);

    git.on('close', function(){
        git = sp('git', ['commit', '-am', name + ' looks awesome']);
        git.on('close', function(){
            console.log('then..');
        });
    });
});