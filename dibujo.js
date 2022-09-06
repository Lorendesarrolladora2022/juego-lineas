//alert("Viva belcebu cristo Rey")
//de esta manera se organiza el tablero
var tab = document.getElementById("tablero");
var pizarra = tab.getContext("2d");
//de esta manera llamamos el boton borrar
var borrar = document.getElementById("borrar");
borrar.addEventListener("click", borrarTablero);
//de esta manera llamamos al boton dibujar
var dibujar = document.getElementById("dibujar");
dibujar.addEventListener("click", trazar);
//de esta manera llamamos al boton cantidad de lineas
var cantidadLineas = document.getElementById("cantidadL")

dibujarLinea(0, 0, 0, 300, "blue")
dibujarLinea(0, 0, 300, 0, "blue")
dibujarLinea(300, 0, 300, 300, "blue")
dibujarLinea(0, 300, 300, 300, "blue")
//con esta funcion se dibujan las lineas
function trazar()
{  var lin = cantidadLineas.value
   var espacio = 300/lin
  //verificar color seleccionado
    var color1 = document.getElementById("color1").value 
    var color2 = document.getElementById("color2").value
    var color3 = document.getElementById("color3").value 
    var color4 = document.getElementById("color4").value  
  //como trazar varias lineas
    for(t=0; t<lin; t++)
    {
      dibujarLinea(0, (t+1)*espacio, 300-t*espacio, 0, color1)
      dibujarLinea(t*espacio, 0, 300, (t+1)*espacio, color2)
      dibujarLinea(0, t*espacio, (t+1)*espacio, 300, color3)
      dibujarLinea(t*espacio, 300, 300, 300-(t+1)*espacio, color4)
    }
}
//funcion de dibujar una linea
function dibujarLinea(xin, yin, xfin, yfin, color)
{
    pizarra.beginPath();
    pizarra.moveTo(xin, yin);
    pizarra.lineTo(xfin, yfin);
    pizarra.strokeStyle = color
    pizarra.stroke();
    pizarra.closePath();
}


function borrarTablero()
{
  pizarra.clearRect(1, 1, 298, 298);
}

