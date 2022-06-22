const express = require('express')
const { ContenedorArchivoSinPromise } = require("./ContenedorArchivoSinPromise.js")


const app = express()
app.use(express.json());

c = new ContenedorArchivoSinPromise()

let myObject = { }  

app.get('/productos', (req,res) => {
    myObject = c.getAllArchivo()
    console.log("mi objeto: " + myObject)
    res.send(myObject)

})


app.get('/productosRandom', (req,res) => {
    myObject = c.chooseRandom()
    console.log(myObject)
    res.send(myObject)
})

const PORT = 8081

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})