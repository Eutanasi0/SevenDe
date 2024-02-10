const express = require("express");


const app = express();



app.use(express.static('front'));



app.listen(3000, () => {
    console.log('hi, im wasa and im innn http://localhost:3000');
});


// Iniciar el servidor
/*
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
    console.log("hi, im wasa and im innn localhost", 3000);
});
*/