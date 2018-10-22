import Router from 'express';

const router = Router();

const authCheck = (req, res, next) =>{
    if(!req.user){
        // if not logged in
        res.redirect('/auth/login');
    }else{
        next();
    }
}; 


router.get('/',authCheck, (req,res)=>{
    res.send({
        name: req.user.username,
        thumbnail: req.user.thumbnail
    });
});


export default router;