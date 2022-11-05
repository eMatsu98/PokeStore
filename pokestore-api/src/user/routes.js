const router= require('express').Router();
const controller=require('./controller');

router.get('/getone',controller.getAll);

//router.post('/p',controller.postOne);


router.delete('/delete',controller.deleteOne);
// router.get('/:id',controller.getOne);



module.exports=router;