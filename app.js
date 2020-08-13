const express = require('express');
const path = require('path')

const app =express();
const bodyParser= require('body-parser')
const Joi = require('joi')


app.use('/public', express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'static','index.html'))
});

app.post('/',(req,res)=>{
    console.log(req.body)
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    })

    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            res.send('an error has ocurred')
        }
        console.log(result)
        res.send('succesfully posted data')
    })
    //data base work here
    //res.send('successfully posted data')
})

app.listen(3000);