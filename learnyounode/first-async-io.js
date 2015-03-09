var fs = require('fs');
var fPath = process.argv[2];

fs.readFile(fPath, 'utf8', function doneReading(err, data){
        if (fPath===null){
                err = '!';

        } else {
                console.log(data.split('\n').length-1);
        }
});
