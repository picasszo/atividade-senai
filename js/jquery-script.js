//efeito de esconder formulário de cadastro
$(document).ready(function(){
    $("#botao-cadastrar").click(function(){
        
        $("#form-cadastrar").slildeToggle("slow");
        $("#section-login").slildeToggle("slow");
        $("#botao-cadastrar").hide();




    });

});

