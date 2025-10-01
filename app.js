const express = require ("express");
const app = express();
const PORT = 3000;
const path = require ("path");

app.get ('/', (req, res) => {
    //res.send('¡Bienvenido a mi servidor Express!');
    res.sendFile(path.join(__dirname + "/index.html")); 
});
app.get ('/saludo', (req, res) => {
    res.send('¡Hola desde la ruta de saludo!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});