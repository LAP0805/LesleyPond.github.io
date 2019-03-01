
 $(document).ready(function(){
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
  });
  $(document).ready(function(){
    $('.carousel').carousel();
  });
  $(".portfolio").on("click",function(){
    window.location.href = "portfolio.html";
  })