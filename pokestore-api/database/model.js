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
        var myquery = {name : 'test'};
        console.log('entre');
        this.collection.deleteOne(myquery);
    }

}
module.exports=BaseModel;