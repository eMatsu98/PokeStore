
//amd libreria require js.
//callback
const express = require('express');
const app= express();
const database = require('./database')
require('dotenv').config();

const apiRoutes=require('./src/api')
const port= process.env.port || 5000;

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = require('./swagger.json');

const swaggerDoc = swaggerJSDoc(swaggerOptions);

app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDoc));

var multer = require('multer');

let db;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files_to_save')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.json());
app.use('/a',express.static('/b'));
app.use('/',apiRoutes)

app.get('',(req,res)=>{
    console.log('api works');
})
app.use(express.static(__dirname + '/files_to_save'));
app.use('/uploads', express.static('uploads'));

// app.get('',async(req,res)=>{
//     const collection=database.db().collection('users');
//     const users=await collection.find({}).toArray();
//     res.send(users)
// })

app.post('/upload', upload.single('image'), function (req, res, next) {
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file))
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    response += `<img src="${req.file.path}" /><br>`
    return res.send(response)
  })

const socketIo = require('socket.io');

database.connect().then(client=>{

    const db=client.db('PokeStore');
    database.db(db);

    const server = app.listen(port,()=>{
        console.log('app is running on port ' + port);

    });

    const io = socketIo(server,{
        cors:{
            origin:'*'
        }
    });
    io.on('connection',socket=>{
        console.log('alguien se conecto!');
        socket.on('share',data=>{
            console.log('alguien compartio informacion',data);

            socket.broadcast.emit('onshared',data)
        })
    })
}).catch(err=>{
    console.log('failed to connect to db');
})
