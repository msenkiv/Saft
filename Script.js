      
function botao() {
    var txt;
    var str = "Clique aqui!";
    var result = str.link("index.html");
    if (confirm("Download se iniciará em instantes")) {
        txt = "Se o download não se iniciar automaticamente"
        document.getElementById("demo").innerHTML = txt +" "+ result;
    } else {
        txt = "Ainda tem dúvida?Fale com um de nossos consultores.  ";
        document.getElementById("demo").innerHTML = txt
    }
    
}
