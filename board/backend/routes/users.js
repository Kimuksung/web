//import bkfd2Password from 'pbkdf2-password';

const router = require('express').Router();
let User = require('../models/user.model');
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var cors=require('cors');

var corsOptions={
  origin:'http://localhost:3000',
  optionSuccessStatus:200
}

router.route('/').get((req, res) => {
    if(req.cookies){
        console.log(req.cookies);
    }
    res.send("temp");
/*  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));*/
});

router.post('/login',cors(corsOptions),function(req,res){
    var pw = req.body.pw;
    var id = req.body.id;
    console.log(req.body);
    User.findOne({id: req.body.id},function(err,user){
        if(!user){
            console.log("user없을떄");
            return res.status(408).json({
                error: "no id"
            });
        }else{
            console.log("user있을떄");
            hasher({password:pw,salt:user.salt}, function(err, pass, salt, hash){
                if(hash===user.pw){  
                    console.log("로그인 성공")
                    return res.json({success:"true"});
                }else{
                    console.log("인증 실패");
                    return res.status(409).json({
                        error: "no login1"
                    });
                }
            });
        }
    })
})
    /*let content;
    if(req.session.userName){
        content = `<h1>${req.session.userName} 안녕하세요.</h1>`;
        res.send(content);
    }else{
        content = `<h1>sex</h1>`;
    }
    res.send(content);*/

/*
router.route('/login').post((req,res)=>{
    var id = req.body.id;
    var pw = req.body.pw;
    let isRight=false;
    
    User.findOne({id: id},function(err,user){
        if(user){
            hasher({password:pw,salt:user.salt}, function(err, pass, salt, hash){
                if(hash===user.pw){
                    isRight=true;    
                    req.session.userName = id;
                    console.log(req.session);
                    return res.json({ success: req.session });
                }else{
                    console.log("인증 실패");
                    return res.status(409).json({
                        error: "no login1"
                    });
                }
            });
        }else{
            return res.status(408).json({
                error: "no id"
            });
        }
    })
});*/

router.route('/:id').get((req,res)=>{
    User.findOne({id: req.params.id},function(err,user){
        if(err) return res.status(500).json({error:err});
        if(!user) return res.status(404).json({error: 'user1 not found'});
        res.json(user);
    })
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const email = req.body.email;
  let useridRegex = /^[a-z0-9]+$/;
  if(!useridRegex.test(req.body.id)) {
    return res.status(400).json({ // HTTP 요청에 대한 리스폰스 (json 형식으로)
        error: "BAD ID",
        code: 1
        });   
    }
    if(req.body.pw.length < 6 || typeof req.body.pw !== "string") { //비밀번호가 6글자 이하라면 + string type이 아니라면
        return res.status(400).json({
            error: "BAD PASSWORD",
            code: 2
        });
    }
    User.findOne({ id: req.body.id }, (err, exists) => { //Model.findOne 메소드
        if (err) throw err;
        if(exists){
            return res.status(409).json({
                error: "ID EXISTS",
                code: 3
            });
        }
        console.log(req.body.pw);
        hasher({password:req.body.pw}, function(err, pass, salt, hash){
            User = new User({
                id: req.body.id,
                pw: hash,
                salt: salt,
                email: req.body.email
            });
            User.save( err => {
                if(err) throw err;
                return res.json({ success: true });
            });
        });
    })
});

module.exports = router;