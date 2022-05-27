export function corSemaforo(cor){
    let msg = "";
    if(cor == "verde"){
      msg = "Pode passar"
    }
    else if(cor == "amarelo"){
      msg = "Eitaa presta atenção ai viu"
    }
    
    else{
 
     msg = "Espera meu"
    }
    return msg;
   
}

export function diaSemana(dia){
   if(dia == 0){
       return "domingo"
   }
   else if(dia ==1){
       return "segunda"
   }
   else if(dia == 2){
       return "terça"
   }
   else if (dia == 3){
       return "quarta"
   }
   else if (dia == 4){
       return "quinta"
   }
   else if (dia ==5){
       return "sexta"
   }
   else if (dia == 6){
       return "sabado"
   }
   else if (dia == 7){
       return "domingo"
   }
   else{
       return "esse dia é inexistente"
   }

}

export function fatorial(numero){
    let fat = 1;
    for(let i = numero; i > 1; i--){
        fat = fat * i;
    }
    return fat 
}