const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup');

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Página inicial de exemplo!'))
app.get('/failed', (req, res) => res.send('Ocorreu algum problema no login professor!'))


app.get('/good', isLoggedIn, (req, res) => res.send(`Bem vindo ${req.user.displayName}!`))


app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/retorno', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {

    res.redirect('/good');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.listen(8001, () => console.log(`Executando na porta ${8001}!`))