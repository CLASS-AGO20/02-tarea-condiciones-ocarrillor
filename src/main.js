export default class App {
    esPar(numero){
        if(numero ==  0){
            return false;
        }else if(numero % 2 == 0){
            return true;
        }else{
            return false;
        }
    }   

    esMultiplo(numero1, numero2){
        if(numero1 % numero2 == 0){
            return true;
        }else{
            return false;
        }
    }
}

let app = new App();
//Demostracion de la funcion esPar.
console.log(app.esPar(0));
console.log(app.esPar(5));
console.log(app.esPar(6));
//Demostracion de la funcion esMultiplo.
console.log(app.esMultiplo(20,4));
console.log(app.esMultiplo(30,7));