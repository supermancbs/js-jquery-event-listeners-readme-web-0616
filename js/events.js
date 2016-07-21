//define functions here

function getIt() {
  $('p').click(function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass("tasty");
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $("form").on('submit',function() {
    alert('Your form is going to be submitted now.');
    return;
  })
}



$(document).ready(function(){

// call functions here

getIt()

frameIt()

pressIt()

submitIt()

});
