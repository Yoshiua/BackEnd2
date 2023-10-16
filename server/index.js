const express = require("express");

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const homeController = require("./homeController");
app.get('/api/houses', homeController.getHouse)
app.post('/api/houses', homeController.createHouse)
app.put('/api/houses/:id', homeController.updateHouse)
app.delete('/api/houses/:id', homeController.deleteHouse)

app.listen(4004, () => console.log("Server running on port 4004"));