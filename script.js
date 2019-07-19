//códigos javascript 

//add target="blank" attribute for all 'a' elements(to open the link on new tab)
$(document).ready(function (){
    $('a').attr('target','_blank');
});

var lblNome = document.getElementById('seuNome');
var lblEmail = document.getElementById('exampleFormControlInput1');
var lblMenssagem = document.getElementById('exampleFormControlTextarea1');
var btnElement = document.getElementById('btn-send');

console.log(lblNome);
console.log(lblEmail);
console.log(lblMenssagem);
console.log(btnElement);

//Quando clicar no botão de enviar:
$("#btn_send").click(function(){
    alert(
            "Dados coletados para enviar ao e-mail ou banco de dados = \n"+
            "Nome: "+lblNome.value+"\n"+
            "Email: "+lblEmail.value+"\n"+
            "Menssagem: "+lblMenssagem.value
        );
  });
