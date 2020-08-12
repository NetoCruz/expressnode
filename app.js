const express = require('express');

const app =express();

app.get('/',(req, res)=>{
  res.send('Hello World');
});
app.get('/home',(req,res)=>{
  res.send('Bienvenido al home')
})

app.get('/home/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query)
    //res.send('ejemplo con route params')
    res.send(req.params.name + ':' + req.params.age)
  })

app.listen(3000);