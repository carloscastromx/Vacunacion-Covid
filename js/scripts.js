function resultado(){
    var x = parseInt(document.getElementById('edad').value);
    if (x>=60){
        document.getElementById('resultado').innerHTML = "Marzo y Abril";
    }else if (x>=50&&x<60){
        document.getElementById('resultado').innerHTML = "Mayo";
    }else if (x>=40&&x<50){
        document.getElementById('resultado').innerHTML = "Junio";
    }else if (x>=30&&x<40){
        document.getElementById('resultado').innerHTML = "Julio";
    }else{
        document.getElementById('resultado').innerHTML = "Diciembre";
    }
}