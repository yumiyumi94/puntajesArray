/*La tarea consiste en enfrentar estas votaciones de ambos comparando a[0] con b[0], a[1]
con b[1] y a[2] con b[2].
Si a[i] > b[i], entonces, Alicia recibe 1 punto.
Si a[i] < b[i], entonces, Bob recibe 1 punto.
Si a[i] = b[i], ninguna persona recibe un punto.
Los puntos de comparación son los puntos totales que ganó una persona. ¡Ojo! No los
votos, sino los puntos ganados en cada etapa */

const votosAlicia = [23,82,46];
const votoBob = [45, 8, 32]; 
let puntos1 = 0;
let puntos2 = 0;

function encuentreGanador(array1, array2){
    for (let i = 0; i < array1.length; i++) {
        if(array1[i]>array2[i]){
            puntos1 = puntos1 + 1; 
        }else if(array1[i]<array2[i]){
            puntos2 = puntos2 +1; 
        }else{
            puntos1 = puntos1 +0;
            puntos2 = puntos2 + 0;
        }
    }

    let ganador = 0;
    if(puntos1>puntos2){
        ganador = "Alicia";
    }else if(puntos2>puntos1){
        ganador = "Bob";
    }else{
        ganador = "empatados";
    }
    console.log(ganador);
}

encuentreGanador(votosAlicia, votoBob);

