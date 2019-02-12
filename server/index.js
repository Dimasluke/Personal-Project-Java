const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const massive = require('massive');
const app = express();
const savedController = require('./controllers/savedController');

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

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})