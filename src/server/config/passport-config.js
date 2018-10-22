import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from './keys';
import User from './../model/user.js';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport callback fired');
    User.findOne({
        googleId: profile.id
    }).then((currentUser) => {
        if (currentUser) {
            //already present
            console.log('User Found :' + currentUser);
            done(null, currentUser);
        } else {
            new User({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
            }).save().then((newUser) => {
                console.log("new user created: " + newUser);
                done(null, newUser);
            });
        }
    })
}));