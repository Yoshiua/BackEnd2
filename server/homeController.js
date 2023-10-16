const db = require('./db')

let houseID = 4

module.exports = {
    getHouse: (req, res) => {
    res.status(200).send(db)
},
    deleteHouse: (req, res) => {
    const { id } = req.params
    const index = db.findIndex(id => db.id === +id);

    db.splice(index, 1);
    res.status(200).send(db);
},  
    createHouse: (req, res) => {
        let newHouse = req.body;
        newHouse.id = houseID
        db.push(newHouse)
        houseID++;
        res.status(200).send(db);
},
    updateHouse: (req, res) => {
       let { id } = req.params;
       let { type } = req.body;

       for (let i = 0; i < db.length; i++) {
           if (db[i].id === +id && type === 'minus') {
               db[i].price -= 10000 
           }
           if (db[i].id === +id && type === 'plus') {
               db[i].price += 10000
           }

       }
       res.status(200).send(db);
}
}

