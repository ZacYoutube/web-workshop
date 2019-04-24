$(document).ready(function(){
  $(".navbar-btn").click(function(){
      $(".group-ham").addClass("hidehambuger");
      $(".narvbar-btn").addClass("exit-img");
      console.log("test CALLED");
      var nav = document.getElementById("full-nav");
      if(nav.style.display=="block"){
          nav.style.display= "none";
      }
      else if(nav.style.display="none"){
          nav.style.display="block";
      }
  })
  $(".testing").click(function(){
    console.log("test");
  })
  function test (x){
      return x+1;
  }
});
