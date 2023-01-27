// variables 

var a ; // declarando la variable a
var b = "b"; // declaramos y asignamos 
b = "bb";// reasignacion
var a = "aaa"; //redeclaracion 


//Global Scope

var fruit = "Apple"; // global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}

bestFruit()


function countries(){
    country = "Colombia"; //Global
    console.log(country);
}

countries();
console.log(country)