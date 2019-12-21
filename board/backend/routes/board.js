const router = require('express').Router();
let Board = require('../models/board.model');
const multer = require('multer');
const path=require('path');
var cors=require('cors');

var corsOptions={
  origin:'http://localhost:3000',
  optionSuccessStatus:200
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

router.get(('/'),(req,res)=>{
    return res.json({ success:"okay"})
});

router.post('/up', upload.single('img'), (req, res) => {
    console.log(req.files);
    console.log(req.body.category1=='true');
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

//router.route("/upload").post(upload.single('image'),(req,res,next)=>{
  //console.log(req.file);
  /*const newBoard=new Board({
      imageName:req.body.imageName,
      imageData:req.file.path
  });
  newBoard.save()
    .then((result)=>{
        console.log(result);
        res.status(200).json({
            success:true,
            document:result
        });
    }).catch((err)=>next(err));  
})*/
//})

module.exports = router;