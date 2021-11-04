 /**Capturando valores digitados */

let number;
let typeOperation ="";
let campo = document.querySelector('#campo');


 function btn1(){ let campo = document.querySelector('#campo');campo.value += 1;}
 function btn2(){ let campo = document.querySelector('#campo');campo.value += 2;}
 function btn3(){ let campo = document.querySelector('#campo');campo.value += 3;}

 function btn4(){ let campo = document.querySelector('#campo');campo.value += 4;}
 function btn5(){ let campo = document.querySelector('#campo');campo.value += 5;}
 function btn6(){ let campo = document.querySelector('#campo');campo.value += 6;}

 function btn7(){ let campo = document.querySelector('#campo');campo.value += 7;}
 function btn8(){ let campo = document.querySelector('#campo');campo.value += 8;}
 function btn9(){ let campo = document.querySelector('#campo');campo.value += 9;}

 function btn0(){ let campo = document.querySelector('#campo');campo.value += 0;}
 function btnClear(){ let campo = document.querySelector('#campo');campo.value = "" ;}
 function btnDote(){ let campo = document.querySelector('#campo');campo.value += '.';}


 /**Operations */
 function soma(){ 
     typeOperation = 'a';
     number = Number.parseFloat(campo.value);
     campo.value = "";
    }
    
    function sub(){ 
        typeOperation = 's';
        number = Number.parseFloat(campo.value);
        campo.value = "";
       }

       function mult(){ 
        typeOperation = 'm';
        number = Number.parseFloat(campo.value);
        campo.value = "";
       }

       function div(){ 
        typeOperation = 'd';
        number = Number.parseFloat(campo.value);
        campo.value = "";
       }



/**Results of operations */
    function iqual(){ 


        switch(typeOperation){
            case 'a':
                number = number + Number.parseFloat(campo.value);
                campo.value = number;
            break;

            case 's':
                number = number - Number.parseFloat(campo.value);
                campo.value = number;
            break;

            case 'm':
                number = number * Number.parseFloat(campo.value);
                campo.value = number;
            break;

            case 'd':
                number = number / Number.parseFloat(campo.value);
                campo.value = number;
            break;
        }
    }
 



 

 



  