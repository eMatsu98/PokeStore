const model= require('./models');

const jwt = require('jsonwebtoken');
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

    async login(req, res) {
        const m = new model();
        let {
            name,
            email,
            password
        } = req.body;
        m.encuentraOne({
            email
        }).then(datos => {
            if (((datos.password == password && datos.email == email) ||datos.name == name)) {
                // console.log("entre");
                let token = jwt.sign({
                        name: datos.name,
                        email: datos.email,
                        password: datos.password
                    },
                    'a', {
                        expiresIn: 48 * 48
                    }

                );
                res.status(201).send({token:token, id:datos.id});
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
            next();
          });
        } else {
          res.status(401).send({ error: "no autenticado, falta token" });
          return;
        }
      }
};

module.exports = new userController();