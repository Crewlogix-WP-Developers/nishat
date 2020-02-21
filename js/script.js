
jQuery(function($){
  $(document).ready(function() {


  	 //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });
    function nextTab(elem) {
            $(elem).next().find('a[data-toggle="tab"]').click();
        }
        function prevTab(elem) {
            $(elem).prev().find('a[data-toggle="tab"]').click();
        }


    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
        // $($active).removeClass('nextOne');
        $('.wizard .nav-tabs li.active').prev().addClass('passed');
        $('.wizard .nav-tabs li.passed input[type="checkbox"]').prop( "checked", true );
        $('.wizard .nav-tabs li.active input[type="checkbox"]').prop( "checked", true );
        // $('.wizard .nav-tabs li.wating input[type="checkbox"]').prop( "checked", false );
        var url  = window.location.href; 
        console.log(url);
    });

    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

        // $($active).nextAll().addClass('nextOne');
        $('.wizard .nav-tabs li.active').nextAll().removeClass('passed');
        $('.wizard .nav-tabs li.active').nextAll().addClass('wating');
        $('.wizard .nav-tabs li.wating input[type="checkbox"]').prop( "checked", false );
        // $('.wizard .nav-tabs li.active input[type="checkbox"]').prop( "checked", false );
        $('.wizard .nav-tabs li.active input[type="checkbox"]').prop( "checked", true );
    });

		



        // Room Detail page
        $('.view-room-detail.show').click(function(){
            $(this).parent('.room-info').siblings('.room-desccription-detail-main').slideToggle(1000);
        });
        $('.view-room-detail.hide').click(function(){
            $(this).parent('.room-desccription-detail-main').slideToggle(1000);
        });




    });// end of document.read
});
