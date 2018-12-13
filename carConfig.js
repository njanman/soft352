$(document).ready(function(){
  $("#blue").click(function(){
    $("#mainColor").attr("src", "RS5/rs5BFrontSide.jpeg");
    $("#final").attr("src", "RS5/rs5BSide.jpeg");
    $("#alloys").attr("src", "RS5/rs5BAlloys.jpeg");
    $("#carouselFrontSide").attr("src", "RS5/rs5BFrontSide.jpeg");
    $("#carouselSide").attr("src", "RS5/rs5BSide.jpeg");
    $("#carouselRearSide").attr("src", "RS5/rs5BRearSide.jpeg");
    $("#carouselRear").attr("src", "RS5/rs5BRear.jpeg");
    $("#carouselFront").attr("src", "RS5/rs5BFront.jpeg");
    $("#carouselHeadlights").attr("src", "RS5/rs5BHeadlights.jpeg");
    $("#carouselAlloys").attr("src", "RS5/rs5BAlloys.jpeg");
  });

  $("#grey").click(function(){
    $("#mainColor").attr("src", "RS5/rs5FrontSide.jpeg");
    $("#final").attr("src", "RS5/rs5Side.jpeg");
    $("#alloys").attr("src", "RS5/rs5Alloys.jpeg");
    $("#carouselFrontSide").attr("src", "RS5/rs5FrontSide.jpeg");
    $("#carouselSide").attr("src", "RS5/rs5Side.jpeg");
    $("#carouselRearSide").attr("src", "RS5/rs5RearSide.jpeg");
    $("#carouselRear").attr("src", "RS5/rs5Rear.jpeg");
    $("#carouselFront").attr("src", "RS5/rs5Front.jpeg");
    $("#carouselHeadlights").attr("src", "RS5/rs5Headlights.jpeg");
    $("#carouselAlloys").attr("src", "RS5/rs5Alloys.jpeg");
  });

  $("#19").click(function(){
    $("#alloys").attr("src", "RS5/rs5Alloys.jpeg");
    $("#final").attr("src", "RS5/rs5Side.jpeg");
    $("#carouselFrontSide").attr("src", "RS5/rs5BFrontSide.jpeg");
    $("#carouselSide").attr("src", "RS5/rs5BSide.jpeg");
    $("#carouselRearSide").attr("src", "RS5/rs5BRearSide.jpeg");
    $("#carouselRear").attr("src", "RS5/rs5BRear.jpeg");
    $("#carouselFront").attr("src", "RS5/rs5BFront.jpeg");
    $("#carouselHeadlights").attr("src", "RS5/rs5BHeadlights.jpeg");
    $("#carouselAlloys").attr("src", "RS5/rs5BAlloys.jpeg");
  });

  $("#20").click(function(){
    $("#alloys").attr("src", "RS5/rs520Alloys.jpeg");
    $("#final").attr("src", "RS5/rs5Side20Alloy.jpeg");
    $("#carouselFrontSide").attr("src", "RS5/rs5FrontSide.jpeg");
    $("#carouselSide").attr("src", "RS5/rs5Side.jpeg");
    $("#carouselRearSide").attr("src", "RS5/rs5RearSide.jpeg");
    $("#carouselRear").attr("src", "RS5/rs5Rear.jpeg");
    $("#carouselFront").attr("src", "RS5/rs5Front.jpeg");
    $("#carouselHeadlights").attr("src", "RS5/rs5Headlights.jpeg");
    $("#carouselAlloys").attr("src", "RS5/rs5Alloys.jpeg");
  });

  $("#LED").click(function(){
    $("#headlights").attr("src", "RS5/rs5LED.jpeg");
    /*$("#final").attr("src", "RS5/rs5Side20Alloy.jpeg");
    $("#carouselFrontSide").attr("src", "RS5/rs5FrontSide.jpeg");
    $("#carouselSide").attr("src", "RS5/rs5Side.jpeg");
    $("#carouselRearSide").attr("src", "RS5/rs5RearSide.jpeg");
    $("#carouselRear").attr("src", "RS5/rs5Rear.jpeg");
    $("#carouselFront").attr("src", "RS5/rs5Front.jpeg");
    $("#carouselHeadlights").attr("src", "RS5/rs5Headlights.jpeg");
    $("#carouselAlloys").attr("src", "RS5/rs5Alloys.jpeg");*/
  });

  $("#matrix").click(function(){
    $("#headlights").attr("src", "RS5/rs5Matrix.jpeg");
    /*$("#final").attr("src", "RS5/rs5Side20Alloy.jpeg");
    $("#carouselFrontSide").attr("src", "RS5/rs5FrontSide.jpeg");
    $("#carouselSide").attr("src", "RS5/rs5Side.jpeg");
    $("#carouselRearSide").attr("src", "RS5/rs5RearSide.jpeg");
    $("#carouselRear").attr("src", "RS5/rs5Rear.jpeg");
    $("#carouselFront").attr("src", "RS5/rs5Front.jpeg");
    $("#carouselHeadlights").attr("src", "RS5/rs5Headlights.jpeg");
    $("#carouselAlloys").attr("src", "RS5/rs5Alloys.jpeg");*/
  });

  $("#change").click(function(){

    var alloy       = $("#alloys");
    var main        = $("#mainColor");
    var blueColor   = $("src", "RS5/rs5BFrontSide.jpeg");
    var grey        = $("src", "RS5/rs5FrontSide.jpeg");
    var alloy20Blue = $("src", "RS5/rs5B20Alloys.jpeg");
    var alloyBlue   = $("src", "RS5/rs5BAlloys.jpeg");
    var alloy20     = $("src", "RS5/rs520Alloys.jpeg");

    localStorage.setItem("alloys", alloy);
    localStorage.setItem("mainColor", main);
    localStorage.setItem("RS5/rs5BFrontSide.jpeg", blueColor);
    localStorage.setItem("RS5/rs5FrontSide.jpeg", grey);
    localStorage.setItem("RS5/rs5B20Alloys.jpeg", alloy20Blue);
    localStorage.setItem("RS5/rs5BAlloys.jpeg", alloyBlue);
    localStorage.setItem("RS5/rs520Alloys.jpeg", alloy20);

    console.log(main);
  })




  
  
  //if (main == blue && alloy == alloy20Blue){
    //$("#final").attr("src", "RS5/rs5BSide20Alloy.jpeg");
  //}else  if (main == grey && alloy == alloy20){
    //$("#final").attr("src", "RS5/rs5Side20Alloy.jpeg");
  //}
})