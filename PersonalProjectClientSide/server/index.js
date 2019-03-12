const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const massive = require('massive');
const app = express();
const savedController = require('./controllers/savedController');
const championController = require('./controllers/championController');
const userController = require('./controllers/userController')
const flash = require('connect-flash');

app.use(flash())
app.use(bodyParser.json());
require('dotenv').config();

massive(process.env.CONNECTION_STRING)
    .then(db => {
        console.log('Connected to database.');
        app.set('db', db);
        db.init();
    })
    .catch((err) => console.log(err))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 60 * 1000 *24 *14
        }
    })
)



app.get('/api/savedChampions', savedController.getChampions)
app.get('/api/champions/:id', championController.championStats)

app.get('http://localhost:4000/sessionInfo', userController.sessionInfo)
app.post('/register', userController.register )
app.post('/login', userController.login)
app.post('/logout', userController.logout)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})