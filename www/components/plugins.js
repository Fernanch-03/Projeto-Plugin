// This is a JavaScript file

 $(document).on("click","#alerta",function() {
   
   navigator.notification.alert("Minha mensagem",null,"aviso","aceito");
   
   });

$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Ola mundo");
    }
    if(buttonIndex == 2){
      navigator.notification.alert("Hello word");
    }
  }
   navigator.notification.confirm("escolha A ou B",confirma,"Escolha: ",['A','B']);
});

$(document).on("click","#beep",function(){
  
   navigator.notification.beep(2);
});

$(document).on("click","#vibrar",function(){
  
   navigator.vibrate(2);
}); 