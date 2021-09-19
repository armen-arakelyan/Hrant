const express=require('express');
const app=express()
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser').urlencoded({extended:true});

app.use(express.json())

app.use(cors());

const schema=mongoose.Schema({
    title:String
})

mongoose.connect('mongodb+srv://Armen:1234@cluster0.wscaf.mongodb.net/react_node',{ useUnifiedTopology: true },{ useNewUrlParser: true });

let model=mongoose.model('text',schema)

app.get('/',async(req,res)=>{
    let mymodel= await model.find({});
    res.send(mymodel)
})

app.post('/create',bodyParser,async(req,res)=>{
    if(req.body.title!==0){
        await model({
            title:req.body.title
        }).save()
        res.redirect('http://localhost:3000/')
    }else{
        res.send('error')
    }
})

app.listen(9000)