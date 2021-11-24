function addOrder(valor, colorBarra){  
  var currentBar = getBarra(valor);
  var widthActual = currentBar.style.width.substring(currentBar.style.width.length -1, 0); //cortar string
  if (widthActual == ""){widthActual = "0"} //validacion para el primer click

  if (currentBar.style.width == '0%')
  {
    var currentBtn = getButtonRest(valor);
    currentBtn.disabled = false;
  }  
  currentBar.style.width = (parseInt(widthActual) + 10) + '%'; //parciar string y sumarlo
  currentBar.style.backgroundColor = colorBarra;
  var currentSpan = getSpan(valor);
  currentSpan.innerHTML = (parseInt(widthActual) + 10) / 10;
  if (currentBar.style.width == '100%')
  {
    var currentBtn = getButtonSum(valor);
    currentBtn.disabled = true;
    var currentP = getMessage(valor);
    currentP.style.display = 'inline';
  }
}

function subtractOrder (valor, colorBarra){  
  var currentBar = getBarra(valor);
  var widthActual = currentBar.style.width.substring(currentBar.style.width.length -1, 0); //cortar string
  if (widthActual == ""){widthActual = "0"} //validacion para el primer click  

  if (currentBar.style.width == '100%')
  {
    var currentBtn = getButtonSum(valor);
    currentBtn.disabled = false;
    var currentP = getMessage(valor);
    currentP.style.display = 'none';
  } 
  currentBar.style.width = (parseInt(widthActual) - 10) + '%'; //parciar string y sumarlo  
  var currentSpan = getSpan(valor); 
  currentSpan.innerHTML = (parseInt(widthActual) - 10) / 10;
  currentBar.style.backgroundColor = colorBarra;
  if (currentBar.style.width == '0%')
  {
    var currentBtn = getButtonRest(valor);
    currentBtn.disabled = true;    
  }
}

function getBarra (valor){
  var currentid ='bar_{0}'.replace('{0}', valor);
  var currentBar = document.getElementById(currentid);
  return currentBar;
}

function getButtonSum(valor){
  currentid = 'btnAdd_{0}'.replace('{0}', valor);
  var currentBtn = document.getElementById(currentid);
  return currentBtn;
}

function getButtonRest(valor){
  currentid = 'btnSub_{0}'.replace('{0}', valor);
  var currentBtn = document.getElementById(currentid);
  return currentBtn;
}
function getSpan(valor){
  currentid ='demo{0}'.replace('{0}', valor);
  var currentSpan = document.getElementById(currentid);    
  return currentSpan;
}

function getMessage(valor){
  currentid ='messagebar{0}'.replace('{0}', valor);
  var currentP = document.getElementById(currentid);
  return currentP;
}


