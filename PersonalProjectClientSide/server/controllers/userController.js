const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    register: (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body.userInfo
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.create_user([username, hashedPassword]).then(() => {
                req.session.user = { username };
                res.status(200).json(req.session.user)
            }).catch(error => {
                if(error.message.match(/duplicate key/g)){
                    res.status(409).json({
                        message: 'That user already exists.'})
                } else {
                    res.status(500).json({
                        message: 'An error occured on the server'
                    })
                }
            })
        })
    },
    login: (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body.userInfo
        db.find_user(username).then(user => {
          if(user.length){
            bcrypt.compare(password, user[0].password).then(passwordMatch => {
              if(passwordMatch){
                req.session.user = {username: user[0].username}
                res.status(200).json(req.session.user)
              } else {
                res.status(403).json({ message: 'Invalid password'})
              }
            })
          } else {
            res.status(403).json({ 
                message: 'An error has occured'
            })
          }
        }).catch(err => {
            console.log(err)
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).end()
    },
    sessionInfo: (req, res) => {
      res.status(200).json(req.session.user)
    }
}