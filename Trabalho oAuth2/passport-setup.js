const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {

    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {

    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "28844453309-1eg28hsb4u2ggb5s4v7krvtfli9vkj32.apps.googleusercontent.com",
    clientSecret: "6YaoBpTMoTg7dhtsHSU4W0-9",
    callbackURL: "http://localhost:8001/google/retorno"
  },
  function(accessToken, refreshToken, profile, done) {

    return done(null, profile);
  }
));