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

    calcularSalario(tipoTrabajador, horasTrabajadas){
        switch(tipoTrabajador){
            case 1:
                return horasTrabajadas * 20;
                break;
            
            case 2:
                return horasTrabajadas * 22;
                break;

            case 3:
                return horasTrabajadas * 25;
                break;

            default:
                return -1;
        }
    }

    obtenerCalificacion(calificacionNumerica){
        if((calificacionNumerica >= 0) && (calificacionNumerica <= 5)){
            return "c";
        }else if((calificacionNumerica == 6) || (calificacionNumerica == 7)){
            return "b";
        }else if((calificacionNumerica == 8) || (calificacionNumerica == 9)){
            return "a";
        }else if(calificacionNumerica == 10){
            return "a+"
        }else{
            return "ERROR";
        }
    }

    obtenerCercano100(numero1, numero2, numero3){
        let aux1 = Math.abs(numero1 - 100);
        let aux2 = Math.abs(numero2 - 100);
        let aux3 = Math.abs(numero3 - 100);

        if((aux1 < aux2) && (aux1 < aux3)){
            return numero1;
        }else if((aux2 < aux1) && (aux2 < aux3)){
            return numero2;
        }else if((aux3 < aux1) && (aux3 < aux2)){
            return numero3;
        }
    }

    calcular(numero1, numero2, operador){
        switch(operador){
            case "+":
                return numero1 + numero2;
                break;
            
            case "-":
                return numero1 - numero2;
                break;

            case "*":
                return numero1 * numero2;
                break;

            case "/":
                return numero1 /  numero2;
                break;

            case "%":
                return numero1 % numero2;
                break;

            default:
                return -1;
        }
    }

    costoRenta(peliculas, dia){
        let prom, resto;
        switch(dia){
            case 1:
                prom = 60 * parseInt(peliculas / 3);
                resto = 25 * (peliculas % 3);
                return prom + resto;
                break;
            case 2:
                prom = 25 * parseInt(peliculas / 2);
                resto = 25 * (peliculas % 2);
                return prom + resto;
                break;
            case 3:
                return (25 * 0.85) * peliculas;
                break;
            case 4:
                prom = 25 * parseInt(peliculas / 2);
                resto = 25 * (peliculas % 2);
                return prom + resto;
                break;
            case 5:
                prom = 60 * parseInt(peliculas / 3);
                resto = 25 * (peliculas % 3);
                return prom + resto;
                break;
            case 6:
                return peliculas * 25;
                break;
            case 7:
                return peliculas * 25;
                break;
            default:
                return -1;
        }
    }

    costoBoletos(boletos, zona){
        let costo;
        switch(zona){
            case 1:
                costo = boletos * 300;
                break;

            case 2:
                costo = boletos * 450;
                break;

            case 3:
                costo = boletos * 700;
                break;

            default:
                return -1;
        }

        if(costo > 2000){
            return costo * 0.93;
        }else{
            return costo;
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

//Demostracion de la funcion calcularSalario.
console.log(app.calcularSalario(1,5));
console.log(app.calcularSalario(5,6));

//Demostracion de la funcion obtenerCalificacion.
console.log(app.obtenerCalificacion(5));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(-1));

//Demostracion de la funcion obtenerCalificacion.
console.log(app.obtenerCercano100(103,50,80));
console.log(app.obtenerCercano100(60,95,120));
console.log(app.obtenerCercano100(56,150,105));

//Demostracion de la funcion calcular.
console.log(app.calcular(2,4,"+"));
console.log(app.calcular(20,5,"/"));
console.log(app.calcular(2,4,"="));

//Demostracion de la funcion costoRenta.
console.log(app.costoRenta(5,1));
console.log(app.costoRenta(10,4));
console.log(app.costoRenta(4,10));

//Demostracion de la funcion costoBoletos.
console.log(app.costoBoletos(4,1));
console.log(app.costoBoletos(5,3));
console.log(app.costoBoletos(1,5));