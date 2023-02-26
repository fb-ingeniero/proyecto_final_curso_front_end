/* La variable contador se usará como "bandera". Si es un valor impar dará la opción de
ocultar un contenido, mientras que si es par dará la opción de volver a mostrarlo */ 

let contador = 1;  

/* función que toma como parámetros las clases de los párrafos y la id del botón que 
modificará en el documento html. Oculta/Muestra párrafos y cambia la apariencia del botón */

function myFunction(class_id, id_boton) {
    if (contador%2 == 1) {
      const collection = document.getElementsByClassName(class_id);
      for (let i = 0; i < (collection.length); i++) {
      collection[i].style.display = "none";
      }
      document.getElementById(id_boton).innerHTML = "Mostrar";
      document.getElementById(id_boton).style.backgroundColor = "lightgreen";
    }
    else {
      const collection = document.getElementsByClassName(class_id);
      for (let i = 0; i < (collection.length); i++) {
      collection[i].style.display = "block";
      }
      document.getElementById(id_boton).innerHTML = "Ocultar";
      document.getElementById(id_boton).style ="initial";
    }
    contador = contador + 1;
}