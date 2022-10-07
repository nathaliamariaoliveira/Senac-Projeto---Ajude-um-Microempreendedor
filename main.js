function logar(){
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
    
     if(nome == "admin" && email == "admin" ){
       alert("Seus dados foram salvos, Aguarde contato.");
       location.href = "Saq.html";
     } else {
       alert("Ops, Algo deu errado. tente novamente.")
     }
}


function AlertarUsuario(){
  alert("Ops, Algo deu errado. tente novamente.")
}