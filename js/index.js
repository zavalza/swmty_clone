/*Google events */

var buyButtonMain = document.getElementById('buyButtonMain');
addListener(buyButtonMain, 'click', function() {
   ga('send', 'event', 'button', 'click', 'buyButtonMain');
});

var buyButtonRoles = document.getElementById('buyButtonRoles');
addListener(buyButtonRoles, 'click', function() {
  ga('send', 'event', 'button', 'click', 'buyButtonRoles');
});

/**
 * Utility to wrap the different behaviors between W3C-compliant browsers
 * and IE when adding event handlers.
 *
 * @param {Object} element Object on which to attach the event listener.
 * @param {string} type A string representing the event type to listen for
 *     (e.g. load, click, etc.).
 * @param {function()} callback The function that receives the notification.
 */
function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
}




/*$(document).ready(function () {


   $(function() { //When the document loads
      $("#agenda").bind("click", function() {
        $(window).scrollTop($(".agenda").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      
      });
    }); 

   

   $(function() { //When the document loads
      $("#mentores").bind("click", function() {
        $(window).scrollTop($(".mentores").offset().top), 2000; //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

   $(function() { //When the document loads
      $("#jueces").bind("click", function() {
        $(window).scrollTop($(".jueces").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

   $(function() { //When the document loads
      $(".sede").bind("click", function() {
        $(window).scrollTop($(".lugar").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

    $(function() { //When the document loads
      $(".perfiles").bind("click", function() {
        $(window).scrollTop($(".tickets").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

     $(function() { //When the document loads
      $("#patrocinadores").bind("click", function() {
        $(window).scrollTop($(".patrocinadores").offset().top), 2000; //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

 $("#object").delay(2500).fadeIn(900).animate({top:"-=20px"},900).animate({top:"+=20px"},900).animate({top:"-=20px"},900)
.animate({top:"+=20px"},900).animate({top:"-=20px"},900).animate({top:"+=20px"},900);

});
/*
