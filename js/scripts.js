function resultado(){
    var x = parseInt(document.getElementById('edad').value);
    if (x>=60){
        document.getElementById('fecha').innerHTML = "Marzo y Abril 2021";
    }else if (x>=50&&x<60){
        document.getElementById('fecha').innerHTML = "Mayo 2021";
    }else if (x>=40&&x<50){
        document.getElementById('fecha').innerHTML = "Junio 2021";
    }else if (x>=30&&x<40){
        document.getElementById('fecha').innerHTML = "Julio 2021";
    }else{
        document.getElementById('fecha').innerHTML = "Agosto - Diciembre 2021";
    }

    document.getElementById('resultado-txt').style.display = "block";
}
document.getElementById('btnResultado').addEventListener("click",resultado);
