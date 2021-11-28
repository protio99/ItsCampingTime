var nombre = "Daniela";
let apellido = "Correa";
const edad = 22;
console.log(nombre)
  
//Comentario

var objeto = {
    nombre : "Daniela",
    apellido : "Correa",
    edad : 22
}

console.log(objeto);
//Typeof
console.log(typeof objeto); 
//Array es un objeto

var autos = ['bmw','volvo','audi'];
console.log(typeof autos);        
 
//objetos
 
let objeto2 = {
    nombre : "Daniela",
    apellido : "Correa",
    edad : 22,
    idioma: 'es',
    get Idioma(){
        return this.idioma.toUpperCase;
    },

    set Idioma(Idioma){
        this.idioma = Idioma.toUpperCase;

    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(objeto.nombre);
console.log(objeto2.nombreCompleto );

// Otra forma de crear objetos  
let persona = new Object();
persona.nombre = "Ismael";
persona.apellido = "Piedrahita";

//ciclo para recorres objetos

for (i in objeto2){
    console.log(i);
    console.log(objeto2[i]);
}

//agregar nuevas propiedades al objeto

objeto2.telefono = 34242;

//eliminar propiedades de un objeto

delete persona.telefono; 

//imprimir objetos en navegadores
for (i in persona){
    console.log(i);
    console.log(persona[i]);
}

 let personaArray = Object.values(persona);
 console.log(personaArray);

 let personaString = JSON.stringify(persona);
 console.log(personaString);


 //constructores de objetos

function Persona(nombre,apelido,telefono){
    this.nombre = nombre;
    this.apelido = apelido;
    this.telefono = telefono; 

}

let padre = new Persona("john","Correa",33442);  

//clases, metodos get y set----------------------------

class Animal{
    constructor(nombre, especie){
        this._nombre = nombre;
        this._especie = especie;

    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get especie(){
        return this._especie;
    }

    set especie(especie){
        this._especie = especie;
    }

}

//crear objetos de la clase

let animal1 = new Animal('Morita','Hamster');
console.log(animal1);
