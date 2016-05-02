jQuery(document).ready(function(){
    console.log('eksadasd');
    $("#interface").waypoint(function(){
        $(this.element).find('.moveIn').removeClass('moveIn').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });
    $("#designed-for-humans").waypoint(function(){
        $(this.element).removeClass('backgroundIn');
    },{
        offset: '25%'
    });
    $("#features").waypoint(function(){
        $(this.element).find('.moveIn').removeClass('moveIn').addClass('animated fadeInUp');
    },{
        offset: '25%'
    });
    $(".menu-toggle").click(function(){
        $("#bg-overlay,#main-navigation").toggleClass('off');
        $("body").css('overflowY','hidden');
    });
    $("#bg-overlay").click(function(){
        $("#bg-overlay,#main-navigation").toggleClass('off');
        $("body").css('overflowY','scroll');
    });
});
