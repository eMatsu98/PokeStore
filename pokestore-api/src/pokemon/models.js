const BaseModel= require('./../../database/model')

class User extends BaseModel{

   constructor(){
    super('pokemon');
   }
}

module.exports = User;