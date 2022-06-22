
const { info } = require('console');
const fs = require('fs');
const producto = require('./Producto.js');

//const HandlerArchivo = require('HandlerArchivo.js');

class ContenedorArchivo{
 
    arrayObjects = [];
    
    constructor(arrayObjects) { 
        this.arrayObjects = arrayObjects;
        }
    async saveObjectArchivo(obj){

        //arrayObjects.append(obj);

        await fs.promises.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            const info = JSON.parse(contenido)
            console.log(info.length)


            obj.id = info.length + 1;
            info.push(obj)

            fs.promises.writeFile('productos.txt',JSON.stringify(info, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
            console.log(`Error en escritura: ${error}`)
            })
        })
        .catch(error => console.log(`Error en lectura: ${error}`))


    }

    async getByIdArchivo(number){
        await fs.promises.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            const info = JSON.parse(contenido)
            console.log(info)

            for(let i=0; i < info.length; i =i+1){

                if (info[i].id == number){
    
                    console.log(info[i]);
                }
            }

        })
        .catch(error => console.log(`Error en lectura: ${error}`))

    }

    async getAllArchivo(){

        console.log('entra getall')
        let info = []
        await fs.promises.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            info = JSON.parse(contenido)
            console.log(info)
            

        })
        .catch(error => console.log(`Error en lectura: ${error}`))
        return info
    
    }

    async deletedByIdArchivo(number){

        console.log('entra delete')
        await fs.promises.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            const info = JSON.parse(contenido)
            console.log(info)

            for(let i=0; i < info.length; i =i+1){

                if (info[i].id == number){
                    console.log(info[i])
    
                    info.splice(i,1);
                    console.log(info)
                }
            }
 
            fs.promises.writeFile('productos.txt', JSON.stringify(info, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
            console.log(`Error en escritura: ${error}`)
            })
        })
        .catch(error => console.log(`Error en lectura: ${error}`))


    }

    
    async deleteAllArchivo(){
        
        let infoAux =[]

        await fs.promises.writeFile('productos.txt', JSON.stringify(infoAux, null, 2))
        .then(() => console.log('Archivos eliminados'))
        .catch(error => {
        console.log(`Error en escritura: ${error}`)
        })
    }

    async chooseRandom(){

        let random =[]
        await fs.promises.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            const info = JSON.parse(contenido)
            let number = Math.floor(Math.random() * info.length);
            console.log(info)

            for(let i=0; i < info.length; i =i+1){

                if (info[i].id == number){
    
                    console.log(info[i]);
                    random = info[i]
                }
            }

        })
        .catch(error => console.log(`Error en lectura: ${error}`))

        return(random)
    }
}

 
camara = new producto();

camara.id = 6;
camara.title = 'cámara';
camara.thumbnail = 'www.facebook.com';
camara.precio = 678;

c = new ContenedorArchivo()

//c.saveObjectArchivo(camara)
//c.getByIdArchivo(2)
//c.getAllArchivo()
//c.deletedByIdArchivo(1)
//c.deleteAllArchivo()

module.exports = { ContenedorArchivo }

