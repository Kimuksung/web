const router = require('express').Router();
let Board = require('../models/board.model');
const multer = require('multer');
const path=require('path');
var cors=require('cors');

var corsOptions={
  origin:'http://localhost:3000',
  optionSuccessStatus:200,
}
var corsOptions2={
    origin:'http://localhost:3000',
    optionSuccessStatus:404,
  }

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
      }
    }),
  });

router.get(('/list'),cors(corsOptions),function(req,res){
    Board.find(function(err,board){
        if(err) return res.status(500).send({error:'db failed'});
        res.json(board);
        console.log(board);
    })
    /*Board.find({no:{$in:[1,2,3]}},function(err,array){
        console.log(array);
        res.render('index',{data:array});
    })*/
});

router.get(('/dataselect/:no'),cors(corsOptions),function(req,res){
    console.log(req.params.no);
    Board.findOne({no:req.params.no},function(err,board){
        if(err) return res.status(500).json({error:err});
        if(!board) return res.status(404).json({error: 'user1 not found'});
        console.log(board);
        res.json(board);
    })
});

router.post('/upload',cors(corsOptions),upload.single('img'),(req,res,next)=>{
    console.log(req.file);
    console.log(req.body);
    var num=0;
    Board.countDocuments(function(err,count){
        console.log(count);
        //num=count+1;
        const newBoard=new Board({
            imageName:req.file.originalname,
            imageData:req.file.path,
            category1: req.body.category1=='true',
            category2: req.body.category2=='true',
            category3: req.body.category3=='true',
            category4: req.body.category4=='true',
            subject: req.body.subject,
            content: req.body.content,
            no: count+1,
            address: req.body.address
        });
        newBoard.save().then((result=>{
            //console.log("result:"+result);
            res.status(200).json({
                success:true
            })
        })).catch((err)=>next(err));
    });
});

router.delete(('/delete/:num'),function(req,res){
    console.log(req.params.num);
    Board.deleteOne({no:req.params.num},function(err){
        if(err){
            if(err) return res.status(500).json({error:err});
        }
        res.json({success:"true"});
    })

});

module.exports = router;