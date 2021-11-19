function addOrder(valor, colorBarra){
  var currentCont = 'container_{0}'.replace('{0}', valor);
  var currentid ='bar_{0}'.replace('{0}', valor);
  var currentBar = document.getElementById(currentid);
  currentBar.style.width = (currentBar.style.width + 10) + '%';
  currentBar.style.backgroundColor = colorBarra;
  currentid ='demo{0}'.replace('{0}', valor);
  var currentSpan = document.getElementById(currentid);
  
  currentid ='message{0}'.replace('{0}', valor);
  var currentp = document.getElementById(currentid);
}

currentBar-style.width = (currentBar.style.clientwidth + 10) + 'px';
//buscar la forma de usar el 10%  string a int



  // document.getElementsByClassName('button-negative').prop('disabled', false);
  // var negativos = document.getElementsByClassName('button-negative');






// function addOrder(numBarra, idSpan, idBarra, colorBarra, idcargaCompleta) { 

//   var elem = document.getElementById(idBarra); //coloco un string como variable para que traiga distintas barras   

//   if (pedidos >= 10) {
//       return;
//   }
//   var widthfinal;

//   if (numBarra == 1)
//   {
//     pedidos = pedidos + 1;
//     document.getElementById(idSpan).innerHTML = pedidos;
//     widthfinal = pedidos * 10;  
//     elem.style.width = widthfinal + '%';
//     elem.style.backgroundColor = colorBarra;
//     if (pedidos == 10)

//     {
//       document.getElementById(idcargaCompleta).innerHTML = "Carga Completa";//arreglar la condicion para que llame tambien a pedidos2
//     }
  
//   }
//   else
//   {
//     if (pedidos2 >= 10) {
//       return;
//   }

//     pedidos2 = pedidos2 + 1;
//     document.getElementById(idSpan).innerHTML = pedidos2;
//     widthfinal = pedidos2 * 10;  
//     elem.style.width = widthfinal + '%';
//     elem.style.backgroundColor = colorBarra;
//     if (pedidos2 == 10)

//     {
//       document.getElementById(idcargaCompleta).innerHTML = "Carga Completa";//arreglar la condicion para que llame tambien a pedidos2
//     }

  
//   }  

 

// }
// //Hacer la validación
// //Ordenar los nuevos parametros

// function subtractOrder(numBarra, idSpan, idBarra, colorBarra) {

 
//   var elem = document.getElementById(idBarra);

//   if (numBarra == 1)
//   {
//     if (pedidos == 0) {
//       return;
//     }
//     pedidos = pedidos - 1;
//     document.getElementById(idSpan).innerHTML = pedidos;
//     widthfinal = pedidos * 10;  
//     elem.style.backgroundColor = colorBarra;
//     elem.style.width = widthfinal + '%';
//   }
//   else
//   {
//       if (pedidos2 == 0) {
//         return;
//       }
//     pedidos2 = pedidos2 - 1;
//     document.getElementById(idSpan).innerHTML = pedidos2;
//     widthfinal = pedidos2 * 10;  
//     elem.style.backgroundColor = colorBarra;
//     elem.style.width = widthfinal + '%';    
//   }
  
  
// }
  // switch (numBarra)
  // {
  //   case 1: 
  //     if (pedidos >= 10) 
  //     {
  //       return;
  //     }
  //     idBarra = "barra1";
  //     idSpan = "demo"; //si numbarra es 1 ejecuto las lineas 13 y 14 para identificar el id del div y el span 
  //     colorBarra = "green"; 
  //     cargaCompleta ="messange1";                               
  //     break; //si hay break dejo de comparar con otros cases, sin el break va a seguir comparando en todos 
    
  //   case 2: 
  //     if (pedidos2 >= 10) {
  //       return;
  //     }
  //     idBarra = "barra2";
  //     idSpan = "demo2";
  //     colorBarra = "orange";
  //     cargaCompleta ="messange2"; 
  //     break;
  // } 1 solo parametro

  // var idBarra;
  // var colorBarra;
  // var idSpan;
  // switch (numBarra)
  // {
  //   case 1: 
  //     if (pedidos == 0) {
  //       return;
  //     }
  //     idBarra = "barra1";
  //     colorBarra = "red";    
  //     idSpan = "demo";
  //     break;

  //   case 2:
  //     if (pedidos2 == 0) {
  //       return;
  //     } 
  //     idBarra = "barra2";  
  //     colorBarra = "violet";   
  //     idSpan = "demo2";
  //     break;
  // }    