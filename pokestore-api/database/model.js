const collection= require('./collection');

class BaseModel{
    collection;

    constructor(name){
        this.collection = collection(name);
    }
    findAll(param){
        this.collection.find({}).toArray(param);
    }
    postOne(param){
        this.collection.insertOne(param);
    }
    updateOne(param){

    }
    delOne(param){
        // var myquery = {test : 'test'};
        this.collection.deleteOne(param);
    }

}
module.exports=BaseModel;