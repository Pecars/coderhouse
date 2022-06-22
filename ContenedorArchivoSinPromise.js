
const { info } = require('console');
const fs = require('fs');
const producto = require('./Producto.js');

//const HandlerArchivo = require('HandlerArchivo.js');

class ContenedorArchivoSinPromise{
 
    arrayObjects = [];
    
    constructor(arrayObjects) { 
        this.arrayObjects = arrayObjects;
        }
    saveObjectArchivo(obj){

        //arrayObjects.append(obj);

         fs.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            const info = JSON.parse(contenido)
            console.log(info.length)


            obj.id = info.length + 1;
            info.push(obj)

            fs.writeFile('productos.txt',JSON.stringify(info, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
            console.log(`Error en escritura: ${error}`)
            })
        })
        .catch(error => console.log(`Error en lectura: ${error}`))


    }

     getByIdArchivo(number){
         fs.readFile('productos.txt', 'utf-8')
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

     getAllArchivo(){
        /*
        console.log('entra getall')
        let info = []
         fs.readFile('productos.txt', 'utf-8')
        .then(contenido => {
            console.log('productos.txt: lectura exitosa')

            info = JSON.parse(contenido)
            console.log(info)
            

        })
        .catch(error => console.log(`Error en lectura: ${error}`))
        return info
        */
        console.log('entra getall')
        let info = []
        fs.readFile('productos.txt', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            info= JSON.parse(data);
            console.log("dentro del readfile")
            console.log(info)
        
            
          });

          return [...info]
         
    }

     deletedByIdArchivo(number){

        console.log('entra delete')
         fs.readFile('productos.txt', 'utf-8')
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
 
            fs.writeFile('productos.txt', JSON.stringify(info, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
            console.log(`Error en escritura: ${error}`)
            })
        })
        .catch(error => console.log(`Error en lectura: ${error}`))


    }

    
     deleteAllArchivo(){
        
        let infoAux =[]

         fs.writeFile('productos.txt', JSON.stringify(infoAux, null, 2))
        .then(() => console.log('Archivos eliminados'))
        .catch(error => {
        console.log(`Error en escritura: ${error}`)
        })
    }

     chooseRandom(){

        let random =[]
         fs.readFile('productos.txt', 'utf-8')
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

//c = new ContenedorArchivo()

//c.saveObjectArchivo(camara)
//c.getByIdArchivo(2)
//c.getAllArchivo()
//c.deletedByIdArchivo(1)
//c.deleteAllArchivo()

module.exports = { ContenedorArchivoSinPromise }

