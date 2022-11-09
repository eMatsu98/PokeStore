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
            res.send({status:"400"})
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

    login(req, res) {
        const m = new model();
        let {
            name,
            email,
            password
        } = req.body;
        m.findOne({
            email
        }).then(datos => {
            if (
                datos &&
                ((datos.password == password && datos.email == email) ||
                    datos.name == name)
            ) {
                console.log('sup');
                let token = jwt.sign({
                        _id: datos.id,
                        name: datos.name,
                        email: datos.email,
                        password: datos.password,
                    },
                    'a', {
                        expiresIn: 48 * 48
                    }

                );
                console.log("entre");
                res.send(token);
            } else {
                res.send("Bad credentials");
            }
        }).catch((err) => {
            res.send(err)
        })
    }

    auth(req, res, next) {
        let token = req.get("x-auth");
        if (token) {
          jwt.verify(token, 'a', (err, payload) => {
            if (err) {
              if (err.name == "TokenExpiredError") {
                res.status(401).send({ error: "add time to token" });
              } else {
                res.status(401).send({ error: "Token no válido" });
              }
              return;
            }

            res.send("welcome validated");
            // next();
          });
        } else {
          res.status(401).send({ error: "no autenticado, falta token" });
          return;
        }
      }
};

module.exports = new userController();