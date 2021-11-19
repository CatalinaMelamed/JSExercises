function addOrder(valor, colorBarra){  
  var currentid ='bar_{0}'.replace('{0}', valor);
  var currentBar = document.getElementById(currentid);
  var widthActual = currentBar.style.width.substring(currentBar.style.width.length -1, 0); //cortar string
  if (widthActual == ""){widthActual = "0"} //validacion para el primer click
  
  currentBar.style.width = (parseInt(widthActual) + 10) + '%'; //parciar string y sumarlo
  currentBar.style.backgroundColor = colorBarra;
  currentid ='demo{0}'.replace('{0}', valor);
  var currentSpan = document.getElementById(currentid);
  
  currentid ='message{0}'.replace('{0}', valor);
  var currentp = document.getElementById(currentid);
}

// currentBar-style.width = (currentBar.style.clientwidth + 10) + '%';
