class Contenedor{

    arrayObjects = [];

    saveObject(obj){

        arrayObjects.append(obj);
    }

    getById(number){
        
        for(let i=0; i < this.arrayObjects.length; i =i+1){

            if (arrayObjects[i].id == number){

                console.log(arrayObjects[i]);
            }else{

                console.log(null);
            }
        }
        
    }

    getAll(){
        
        console.log(this.arrayObjects);
    
    }

    deletedById(number){

        for(let i=0; i < this.arrayObjects.length; i =i+1){

            if (arrayObjects[i].id == number){

               arrayObjects.splice(i,1);
            }
        }

    }

    
    deleteAll(){

        arrayObjects.splice(0, arrayObjects.lenght);
    }
}




 C = new Contenedor();

 C.saveObject({id: 1, title: "mi producto 1", price: 99, thumbnail: "foto1.jpg"});

 C.getById(1);

 C.getAll();

 C.deletedById(1);

 C.deleteAll();


