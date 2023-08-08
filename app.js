const express = require ('express');
const app= express();
const path = require('path');

// const PORT =3030;
app.use(express.static(path.resolve(__dirname,'public')));

const PORT= process.env.PORT || 3001

app.listen(PORT,()=> console.log(`Server Up: ${PORT}`));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/register.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/login.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
app.post('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

