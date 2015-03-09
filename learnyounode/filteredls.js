var mymodule = require('./modular-filteredfs')
var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var fExt = '.' + process.argv[3];
fs.readdir(dirPath, function doneReading(err, list){
        if (dirPath===null){
                err = '!';
        } else {
                for (var i = 0; i < list.length; ++i)
                        if (path.extname(list[i])===fExt)
                                console.log(list[i]);
        }
});
