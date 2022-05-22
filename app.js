//Usando objeto express
const express = require('express');
//App de express
const app = express();
app.use(express.json()); //Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// HTTP METHODS
//Get all explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL REQUEST ${new Date()}`);
    const explorer1 = {id: 1, name: "Manuel1"};
    const explorer2 = {id: 2, name: "Manuel2"};
    const explorer3 = {id: 3, name: "Manuel3"};
    const explorer4 = {id: 4, name: "Manuel4"};
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers);
})
//Get single explorer with ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${new Date()}`);
    const explorer = {id: 1, name: "Manuel"};
    res.status(200).json(explorer);
})
//Post, create explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`);
    const requestBody = req.body //Parametros de un cliente
    res.status(201).json({message: "Created"});
})
//Put, update explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body //Parametros del cliente
    res.status(200).json({message: "Updated!"});
})
//Delete, delete a explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body //Parametros de un cliente
    res.status(200).json({message: "Deleted"});
})

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})