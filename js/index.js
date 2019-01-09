$(document).ready(function(){
  $("#blue").click(function(){
    $("#mainColor").attr("src", "http://localhost:9000/img_rs5BFrontSide");
    $("#final").attr("src", "http://localhost:9000/img_rs5BSide");
    $("#alloys").attr("src", "http://localhost:9000/img_rs5BAlloys");
    /*$("#carouselFrontSide").attr("src", "http://localhost:9000/img_rs5BFrontSide");
    $("#carouselSide").attr("src", "http://localhost:9000/img_rs5BSide");
    $("#carouselRearSide").attr("src", "http://localhost:9000/img_rs5BRearSide");
    $("#carouselRear").attr("src", "http://localhost:9000/img_rs5BRear");
    $("#carouselFront").attr("src", "http://localhost:9000/img_rs5BFront");
    $("#carouselHeadlights").attr("src", "http://localhost:9000/img_rs5BHeadlights");
    $("#carouselAlloys").attr("src", "http://localhost:9000/img_rs5BAlloys");*/
  });

  $("#grey").click(function(){
    $("#mainColor").attr("src", "http://localhost:9000/img_rs5FrontSide");
    $("#final").attr("src", "http://localhost:9000/img_rs5Side");
    $("#alloys").attr("src", "http://localhost:9000/img_rs5Alloys");
    /*$("#carouselFrontSide").attr("src", "http://localhost:9000/RS5/rs5FrontSide.jpeg");
    $("#carouselSide").attr("src", "http://localhost:9000/RS5/rs5Side.jpeg");
    $("#carouselRearSide").attr("src", "http://localhost:9000/RS5/rs5RearSide.jpeg");
    $("#carouselRear").attr("src", "http://localhost:9000/RS5/rs5Rear.jpeg");
    $("#carouselFront").attr("src", "http://localhost:9000/RS5/rs5Front.jpeg");
    $("#carouselHeadlights").attr("src", "http://localhost:9000/RS5/rs5Headlights.jpeg");
    $("#carouselAlloys").attr("src", "http://localhost:9000/RS5/rs5Alloys.jpeg");*/
  });

  $("#19").click(function(){
    $("#alloys").attr("src", "http://localhost:9000/img_rs5Alloys");
    $("#final").attr("src", "http://localhost:9000/img_rs5Side");
    /*$("#carouselFrontSide").attr("src", "http://localhost:9000/RS5/rs5BFrontSide.jpeg");
    $("#carouselSide").attr("src", "http://localhost:9000/RS5/rs5BSide.jpeg");
    $("#carouselRearSide").attr("src", "http://localhost:9000/RS5/rs5BRearSide.jpeg");
    $("#carouselRear").attr("src", "http://localhost:9000/RS5/rs5BRear.jpeg");
    $("#carouselFront").attr("src", "http://localhost:9000/RS5/rs5BFront.jpeg");
    $("#carouselHeadlights").attr("src", "http://localhost:9000/RS5/rs5BHeadlights.jpeg");
    $("#carouselAlloys").attr("src", "http://localhost:9000/RS5/rs5BAlloys.jpeg");*/
  });

  $("#20").click(function(){
    $("#alloys").attr("src", "http://localhost:9000/img_rs520Alloys");
    $("#final").attr("src", "http://localhost:9000/img_rs5Side20Alloy");
    /*$("#carouselFrontSide").attr("src", "http://localhost:9000/RS5/rs5FrontSide.jpeg");
    $("#carouselSide").attr("src", "http://localhost:9000/RS5/rs5Side.jpeg");
    $("#carouselRearSide").attr("src", "http://localhost:9000/RS5/rs5RearSide.jpeg");
    $("#carouselRear").attr("src", "http://localhost:9000/RS5/rs5Rear.jpeg");
    $("#carouselFront").attr("src", "http://localhost:9000/RS5/rs5Front.jpeg");
    $("#carouselHeadlights").attr("src", "http://localhost:9000/RS5/rs5Headlights.jpeg");
    $("#carouselAlloys").attr("src", "http://localhost:9000/RS5/rs5Alloys.jpeg");*/
  });

  $("#LED").click(function(){
    $("#headlights").attr("src", "http://localhost:9000/img_rs5LED");
  });

  $("#matrix").click(function(){
    $("#headlights").attr("src", "http://localhost:9000/img_rs5Matrix");
  });

  $("#redAndBlack").click(function(){
    $("#material").attr("src", "http://localhost:9000/img_rs5RedFrontSeats");
  });

  $("#lunar").click(function(){
    $("#material").attr("src", "http://localhost:9000/img_rs5LunarFrontSeat");
    /*$("#carouselFrontSeats").attr("src", "RS5/rs5LunarFrontSeat.jpeg");
    $("#carouselDash").attr("src", "RS5/rs5LunarDash.jpeg");
    $("#carouselRearSeats").attr("src", "RS5/rs5LunarRearSeats.jpeg");*/
  });
});