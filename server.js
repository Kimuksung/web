const express=require('express');
const bodyParser=require('body-parser');
const app =express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/login',(req,res)=>{
    res.send([{
        "id": "kimuksung2",
        "password": "ww0603"
    }, {
        "id": "kimuksung5",
        "password": "hannah0603"
    }]);
})

app.listen(port,()=>console.log(`Listening on port ${port}`));

