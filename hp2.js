$(main())

function main() {
  $('#loader').toggle();
  $('header').fadeIn(1000);
  $('#welcome-1').fadeIn(1000);
  $('#welcome-2').fadeIn(1000);

  // $('.welcome').text('boo')

    var int = setInterval(a,1000)
    function a(){
      console.log($(window).scrollTop());
    }
    // if($(window).scrollTop()==100){
    //
    // }

  }

  //
