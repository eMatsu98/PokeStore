let msg='';

class Common{
    msg='';

    getMessage(){
        return msg;
    }
    setMessage(p){
        this.msg=p;
    }
}

module.exports = new Common();