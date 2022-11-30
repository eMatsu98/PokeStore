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
        console.log('entered');
        const create = new model();
        let {name, email, id, photoUrl}= req.body;
        let obj = {
            name:name,
            email:email,
            id:id,
            photoUrl:photoUrl,
            backgroundUrl : 'https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png',
        }
        try{
            await create.postOne(obj)
        }catch(e){
            res.send({status:"400"})
            console.log(e);
        }
        res.send({status:"200"})
    }

    async update(req,res){
        const update = new model();
        let{name, photoUrl, backgroundUrl, id} = req.body;
        let obj ={
            name:name,
            photoUrl:photoUrl,
            backgroundUrl:backgroundUrl,
            id:id
        }
        let updatedobj = {$set:{id:id}}
        let options = {upsert:true}
        try{
            await update.updateOne(obj,updatedobj,options)
        }catch(e){
            res.send({status:"400"})
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
            res.send({status:"400"})
        }
        res.send({status:"200"})
        
    }
    async encuentralogin(req,res){
        const encuentr = new model();
        let {name} = req.body

        if(!name){
            res.status(400);
        }
        else{
            let obj = {name:name}
            console.log(obj);
            let resp = await encuentr.encuentraOne(obj);
            res.send(resp);
        }
    }

};

module.exports = new userController();