$(document).ready(function(){
  console.log('login ready');
})

function login(){
  if($("#password").val() == "almost"){
    document.location.href = 'socialPriv.html';
  }else{
    alert("Wrong username or password")
  }

}
