/*
 * main.js
 *
 * use like so:
 * node main.js test.txt cat dog
 */
(function() {
    //Declaring variables  
    var fs, reptxt, filedata;

    //Requiring files
    fs = require('fs');
    reptxt = require ('./replace');

    //Reading files
    fs.readFile(process.argv[2],'utf8',function(err,data){
      if(err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
     }
     //Calling replacement function
     filedata = reptxt.replaceme(data,process.argv[3],process.argv[4]);

     //Writing replaced text into a new file
    fs.writeFile("../out.txt", filedata, function(err){
            if(err) {
                console.error("Error saving file", err);
                process.exit(1);
            }
            console.log('out.txt file saved!');
        });

    });

}).call(this)