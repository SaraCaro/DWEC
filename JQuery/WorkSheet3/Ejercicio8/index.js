  $(document).ready(function(){
    $("button").click(function(){
      var divs = $("div");
      $(divs[0]).fadeIn(800);
      $("#div2").fadeIn(2000);
      $("#div3").fadeIn(4000);
      $("#div4").fadeIn("slow");
        $("#div5").fadeIn("fast");
    });
  });