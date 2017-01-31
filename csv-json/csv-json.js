const csvFilePath='final-data.csv'
const csv=require('csvtojson')

var count = 0;
var indian_states = require('./india_states_simplified_basic.js')
indian_states = indian_states.indian_states;


//console.log(indian_states)
//for (var idx in indian_states.features) {
//    console.log(indian_states.features[idx].properties.NAME_1)
//}




csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object 
    // jsonObj.a ==> 1 or 4 
    //console.log(jsonObj)
    var match_found = false;
    for (var idx in indian_states.features) {
        if (indian_states.features[idx].properties.NAME_1 === jsonObj['State/UT']){
            console.log('match found');
            match_found = true;
            for(var key in jsonObj){
                if(key !== 'State/UT') {
                    var tempObj = {};
                    tempObj['display'] = key;
                    tempObj['value'] = jsonObj[key];
                    indian_states.features[idx].properties[key] = tempObj;
                }
                //console.log(key)
            }
            break
        }
    }
    if(!match_found) {
        console.log('match not found');
    }
     
})
.on('done',(error)=>{
    //console.log('end')
    //count = count + 1;
    //console.log('end');
    //console.log(count);
    var content = JSON.stringify(indian_states);
    var fs = require('fs');
    fs.writeFile("final-data.json", content, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("JSON file was saved!");
    }); 
    
})

