const BaseModel= require('./../../database/model')

class User extends BaseModel{

   constructor(){
    super('users');
   }
}

module.exports = User;