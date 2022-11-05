const model= require('./models');

class userController{

    getAll(req,res){
         const todoslosusers= new model();
         todoslosusers.findAll((err,result)=>{
            if(err){
                res.send([]);
            }else{
                res.send(result);
            }
        });
    }
    create(req,res){
        const result = new model();
        result.postOne()
    }
    update(req,res){

    }
    deleteOne(req,res){
        const delone = new model();
        let {test} = req.body;
        console.log(test);
        delone.delOne((err,result)=>{
            if(err){
                res.send([])
            }else{
                res.send(result);
            }
        })
    }   

};

module.exports = new userController();