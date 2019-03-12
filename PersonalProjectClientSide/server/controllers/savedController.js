module.exports = {
    addChampion: (req, res) => {
        const db = req.app.get('db');
        const { name, img } = req.body.championInfo
        db.add_champion([ name, img ])
            .then((champions) => {
                res.status(200).json(champsions)
            })
            .catch((err) => {
                res.status(500).json('addChampion - savedController.js')
            })
    },
    getChampions: (req, res) => {
        const db = req.app.get('db');
        db.get_champions()
            .then((champions) => {
                res.status(200).json(champions)
            })
            .catch((err) => {
                res.status(500).json('getChampions - savedController.js')
            })
    }
}