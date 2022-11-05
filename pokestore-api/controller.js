


class UsersControllers{

    getAll(req,res){
        res.send('llegaste al endpoint de users');
    }
    getOne(req,res){
        res.send('llegaste al get one endpoint',req.params.id);
    }
}

module.exports=new UsersControllers;