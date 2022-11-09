const router= require('express').Router();
const controller=require('./controller');



/**
 * @swagger
 * /pokemon:
 *   get:
 *     tags:
 *       - pokemon
 *     description: This endpoint will get you all uses with all information of the DB WE DO NOT RECOMMEND USING IT SINCE IT WILL SHOW ALL POKEMONS
 *     parameters:
 *       - in: query
 *         name: ramon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: list of all pokemons 
 */

router.get('/getone',controller.getAll);

/**
 * @swagger
 * /pokemon:
 *   post:
 *     tags:
 *       - pokemon
 *     description: This will create a new pokemon to an user.
 *     parameters:
 *       - in: query
 *         name: ramon
 *         description: IV'S and EV'S
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: list of ev's and iv's of a pokemon
 *       400:
 *         description: error. 
 */
router.post('/postone',controller.create);


/**
 * @swagger
 * /pokemon:
 *   put:
 *     tags:
 *       - pokemon
 *     description: This will update a pokemon to an user.
 *     parameters:
 *       - in: query
 *         name: ramon
 *         description: ramons last name
 *         updateobj: what will rewrite in the db
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: will change the pokemon's attribute.
 *       400:
 *         description: error. 
 */
router.put('/putone', controller.update);


/**
 * @swagger
 * /user:
 *   put:
 *     tags:
 *       - pokemon
 *     description: This will delete a pokemon from an user
 *     parameters:
 *       - in: query
 *         name: ramon
 *         description: ramons last name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: transfer or delete successful.
 *       400:
 *         description: error. 
 */
router.delete('/delete',controller.deleteOne);

router.post('/login',controller.login);

router.get('/loginvalidate',controller.auth);



module.exports=router;