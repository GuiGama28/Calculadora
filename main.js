function calculo(){
    var result= Number(document.getElementById("numero1").value)+Number(document.getElementById("numero2").value);
    console.log(result);
    document.getElementById("resultado").innerHTML= result;
    }
    function subtrair(){
    var result= Number(document.getElementById("numero1").value)-Number(document.getElementById("numero2").value);
    console.log(result);
    document.getElementById("resultado").innerHTML= result;
    }
    function multiplicar(){
    var result= Number(document.getElementById("numero1").value)*Number(document.getElementById("numero2").value);
    console.log(result);
    document.getElementById("resultado").innerHTML= result;
    }
    function dividir(){
    var result= Number(document.getElementById("numero1").value)/Number(document.getElementById("numero2").value);
    console.log(result);
    document.getElementById("resultado").innerHTML= result;
    }