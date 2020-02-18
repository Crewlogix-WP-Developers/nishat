
jQuery(function($){
  $(document).ready(function() {

    $('.js-example-basic-single').select2({
        minimumResultsForSearch: Infinity
    });


// Add room fields
    var counter = 2;
		
    $("#addRoom").click(function () {
		
		$(".js-example-basic-single").select2("destroy").select2();

	if(counter>6){
            return false;
	}   
		
	var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'TextBoxDiv' + counter);
                
	newTextBoxDiv.after().html('<div class="nh_formGroupRow row"><div class="col-md-2 nh_roomAddition"><a href="#" id="removeRoom"> <i class="fas fa-times"></i> Room '+ counter +'</a></div><div class="form-group col-md-4"><select class="form-control"><option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option></select><i class="fa fa-chevron-down"></i></div><div class="form-group col-md-4"> <select class="form-control"> <option>0 Children </option><option>1 Children</option> <option>2 Children</option><option>3 Children</option></select><i class="fa fa-chevron-down"></i></div></div>');
            
	newTextBoxDiv.appendTo("#TextBoxesGroup");		
	counter++;
     });

     $("#removeRoom").click(function () {
	if(counter==1){
          alert("No more textbox to remove");
          return false;
       }   
        
	counter--;
			
        $("#TextBoxDiv" + counter).remove();
     });
 

 // Calendar CSS

    $("#inlinePicker").daterangepicker({
        locale: {
          format: "MMMM D, YYYY"
        },
        parentEl: "#inline-calendar",
        alwaysShowCalendars: true,
        autoApply: true,
        inline: true,
        isInvalidDate: function(moment){
                var date=moment.toDate();

                date=date.getDay() + '-' + ( date.getMonth() + 1 ) + '-' + date.getFullYear();

                if(date == '15-2-2020')
                {
                    return true;
                }
                return false;
            }
      });


   // JS for Accommodation Tab 

    var w_width = $(window).width();
    w_height = $(window).height();

    $('.accommodations-add-code-section .acmd-add-code').click(function(){
      $('.accommodations-add-code-section').toggleClass('activeForm');
    });

    $('.accommodations-add-code-section .openDiscoutCode input.cancel').click(function() {
      $('.accommodations-add-code-section').removeClass('activeForm');
    });

     $('.nav-languages').click(function(){
      $('.nav-languages').toggleClass('activeForm');
    });
       $('.nav-languages ~ .acmd-language-code .openDiscoutCode input.cancel').click(function() {
      $('.nav-languages').removeClass('activeForm');
    });

    $('.acmd-roomInfo-main').click(function() {
      $('.details-of-room-main').toggleClass('actively');
      $(this).toggleClass('visite');

      $([document.documentElement, document.body]).animate({
          scrollTop: $("#acmd-room-details").offset().top
      }, 1000);
    });
  $('.pricing-conainer-sticky .cancel-img img').click(function(){
    $('html, body').animate({
          scrollTop: $("div#acmd-room-info").offset().top
      }, 900);
      setTimeout(function(){
      $('.details-of-room-main').removeClass('actively');
      $('.acmd-roomInfo-main').removeClass('visite');

     }, 1000);
  });


  // menu item 
  $('a.menu-tootle-link.show-mobile').click (function(){
      $('.menu-item-wraper').slideToggle(1000);

    // $('.menu-item-wraper').toggleClass('disabled');
  });

 
 if(w_width < 678) {
    $('.mobile-menu').wrapAll('<div class="menu-item-wraper"> </div>');
    $('.menu-item-wraper a').click(function(){
      $('.menu-item-wraper').slideToggle(500);
    });
  }
  $('.total-changes-main .toggle-wraper').click(function(){
    $(this).find('.cart-value-toggle').slideToggle(900);
    $(this).toggleClass('cart-active');

  });



    });// end of document.read
});
