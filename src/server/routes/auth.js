import Router from 'express';
import passport from 'passport';

const router = Router();

// auth with google+
router.get('/google', passport.authenticate("google",{
    scope:['profile']
}));

// call back rout for google
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.redirect('/profile/');
    // get the code
});

export default router;