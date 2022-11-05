const model= require('./models');

class userController{

    //done
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
    //done
    async create(req,res){
        const create = new model();
        let {id, descripcion}= req.body;
        let obj = {id:id, descripcion:descripcion}
        try{
            await create.postOne(obj)
        }catch(e){
            console.log(e);
        }
        res.send({status:"200"})
    }

    async update(req,res){
        const update= new model();
        let{name, plot} = req.body;
        let obj ={name:name}
        let updatedobj = {$set:{plot:plot}}
        let options = {upsert:true}
        try{
            await update.updateOne(obj,updatedobj,options)
        }catch(e){
            console.log(e);
        }
        res.send({status:"200"})
    }
    //done
    async deleteOne(req,res){
        const delone = new model();
        let {test} = req.body;
        let obj = {test:test}

        try{
            await delone.delOne(obj);
        }catch(e){
            console.log(e);
        }
        res.send({status:"200"})
        
    }   

};

module.exports = new userController();