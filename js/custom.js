
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
                
	newTextBoxDiv.after().html('<div class="nh_roomAddition"><span id="removeRoom"> <i class="fas fa-times"></i> Room '+ counter +'</span></div> <div class="nh_formGroupRow"><div class="form-group adult"><select class="form-control"><option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option></select><i class="fa fa-chevron-down"></i></div><div class="form-group children"> <select class="form-control"> <option>0 Children </option><option>1 Children</option> <option>2 Children</option><option>3 Children</option></select><i class="fa fa-chevron-down"></i></div></div>');
            
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


  $('step-item-one input[type="checkbox"]').prop( "checked", true );

  $('button.btn').click(function(){
    if (!$(this).hasClass('page-submit')) {
      $("form#main-form").submit(function(e){
          return false;
      });
    }
    if ($(this).hasClass('update-guests-btn')) {
       $('.step-item-two a').click();
       $('.step-item-two input[type="checkbox"]').prop( "checked", true );
    } 
    else if($(this).hasClass('confirm-stay')) {
       $('.step-item-three a').click();
       $('.step-item-three input[type="checkbox"]').prop( "checked", true );

    }
    else if($(this).hasClass('book')) {
       $('.step-item-four a').click();
       $('.step-item-four input[type="checkbox"]').prop( "checked", true );
    }
     else if($(this).hasClass('btnGoback')) {
       $('.step-item-one a').click();
       $('.step-item-two input[type="checkbox"]').prop( "checked", false );
    }

    // $('.step-item-two a').click();
    
  });

   // Room Detail page
    $('.view-room-detail.show').click(function(){
        $(this).parent('.room-info').siblings('.room-desccription-detail-main').slideToggle(1000);
    });
    $('.view-room-detail.hide').click(function(){
        $(this).parent('.room-desccription-detail-main').slideToggle(1000);
    });


    if(w_width < 991) {
      $('.wizard .content-container').removeClass('container');
      console.log(w_width);
    }

    // Currency block
    $('.wizard-inner li.currency-block').click(function(){
      $('.lang-currency-change-main').slideToggle(1000);
    });


    // Removing room from first tab
    $('button#addRoom').click(function(){
      $('div#TextBoxesGroup div#TextBoxDiv1').siblings().addClass('more-rooms');

       $('.more-rooms .nh_roomAddition ').find('i.fas').click(function(){
          $(this).parents('.more-rooms').slideUp(900, function() {
              $(this).remove();
          });

      });
    });


    // $('.nh_roomAddition').click(function(){
    //   console.log('asdjgfkjdsf');

    // });

    });// end of document.read
});
