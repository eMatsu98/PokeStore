const database = require('./database');

module.exports = function(collectionN){
    if(collectionN){
        const collection = database().collection(collectionN);
        return collection;
    }else{
        return null;
    }
}