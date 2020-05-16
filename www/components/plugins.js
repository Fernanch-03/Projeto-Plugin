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

function mostramapa(lat, long){
  L.mapquest.key = '	sCQLgctps7lqkiXsc2HqzVGPADxudXOG';
 
        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 20
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
    var onSuccess = function(position) {
      mostramapa(position.coords.latitude  , position.coords.longitude)
        
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}); 