import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';

import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';

import keys from './config/keys';

let app = express();

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[ keys.session.cookieKey ]
}))

// init passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//connect to mongoose
mongoose.connect(keys.mongodb.dbURI,() => {
    console.log("connected to mongodb");
});

// create home route
app.get('/', (req, res) => {
    res.render('home', {user: req.user});
}); 

app.listen(8080, () => {
    console.log('app now listening for requests on port 8080');
});
