$(main()) //doc ready

function main() {
  $('#loader').toggle();
  $('#header').fadeIn(1500);

  // var int = setInterval(a,1000)
  // function a(){
  //   console.log($(window).scrollTop());
  // }
    AOS.init({
      once: true,
    });

  };
