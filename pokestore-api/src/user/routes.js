const router= require('express').Router();
const controller=require('./controller');



/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - user
 *     description: This endpoint will get you all uses with all information of the DB
 *     parameters:
 *       - in: query
 *         name: ramon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: list of all users 
 */

router.get('/getone',controller.getAll);

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - user
 *     description: this will create a new user to the DB
 *     parameters:
 *       - in: query
 *         name: ramon
 *         description: ramons last name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: list of all users
 *       400:
 *         description: error. 
 */
router.post('/postone',controller.create);


/**
 * @swagger
 * /user:
 *   put:
 *     tags:
 *       - user
 *     description: This will update a user
 *     parameters:
 *       - in: query
 *         name: id
 *         description: update by id
 *         updateobj: what will rewrite in the db
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: update user by id
 *       400:
 *         description: error. 
 */
router.put('/putone', controller.update);


/**
 * @swagger
 * /user:
 *   put:
 *     tags:
 *       - user
 *     description: This will delete an user
 *     parameters:
 *       - in: query
 *         name: ramon
 *         description: ramons last name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: list of all users 
 *       400:
 *         description: error. 
 */
router.delete('/delete',controller.deleteOne);

router.post('/login',controller.login);

// router.get('/loginvalidate',controller.auth);


module.exports=router;