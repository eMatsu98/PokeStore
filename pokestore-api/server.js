const express= require('express');
const mongoose = require('mongoose');

const app=express();

const uri='mongodb+srv://ITESO:iteso1234@cluster0.u3koub4.mongodb.net/?retryWrites=true&w=majority'




async function connect(){
    try{
        await mongoose.connect(uri);
        console.log('connected');
    }catch(error){
        console.error(error);
    }
}

connect();

app.listen(8000,()=>{
    console.log('Server started');
});