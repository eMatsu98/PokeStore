
//amd libreria require js.
//callback
const express = require('express');
const app= express();
const database = require('./database')
require('dotenv').config();

const apiRoutes=require('./src/api')
const port= process.env.port ||5000;

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = require('./swagger.json');

const swaggerDoc = swaggerJSDoc(swaggerOptions);

app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDoc));



let db;

app.use(express.json());

app.use('/',apiRoutes)

app.get('',(req,res)=>{
    console.log('api works');
})


// app.get('',async(req,res)=>{
//     const collection=database.db().collection('users');
//     const users=await collection.find({}).toArray();
//     res.send(users)
// })

database.connect().then(client=>{

    const db=client.db('PokeStore');
    database.db(db);

    app.listen(port,()=>{
        console.log('app is running');

    })
}).catch(err=>{
    console.log('failed to connect to db');
})
