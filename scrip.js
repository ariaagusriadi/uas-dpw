var conter = 1;
setInterval(function(){
  document.getElementById('radio' + conter).checked = true;
  conter++;
  if(conter > 6){
    conter = 1;
  }
},3000);