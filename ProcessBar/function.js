function addOrder(valor, colorBarra){  
  var currentid ='bar_{0}'.replace('{0}', valor);
  var currentBar = document.getElementById(currentid);
  var widthActual = currentBar.style.width.substring(currentBar.style.width.length -1, 0); //cortar string
  if (widthActual == ""){widthActual = "0"} //validacion para el primer click
 
  currentBar.style.width = (parseInt(widthActual) + 10) + '%'; //parciar string y sumarlo
  currentBar.style.backgroundColor = colorBarra;
  currentid ='demo{0}'.replace('{0}', valor);
  var currentSpan = document.getElementById(currentid);  
  currentSpan.innerHTML = (parseInt(widthActual) + 10) / 10;
  if (currentBar.style.width == '100%')
  {
    currentid = 'btnAdd_{0}'.replace('{0}', valor);
    var currentBtn = document.getElementById(currentid);
    currentBtn.disabled = true;
    currentid ='messagebar{0}'.replace('{0}', valor);
    var currentP = document.getElementById(currentid);
    currentP.style.display = 'inline';
  }
}

// currentBar-style.width = (currentBar.style.clientwidth + 10) + '%';
