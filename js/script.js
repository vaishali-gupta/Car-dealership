
 
$(document).ready(function(){
    $('#browse_toggle').click(function(){
        $('.browse-body').slideToggle();
    });
    
    $('#multi-item-example2').carousel("pause");
        
    $("#joinButton").click(function(){
        $("#joinModal").modal("show");
    });
    $("#joinIcon").click(function(){
        $("#loginModal").modal("show");
    });
    $("#member").click(function(){
        $("#joinModal").modal("hide");
        $("#loginModal").modal("show");
    });
    $('#searchCar').click(function(){
        $('.search_panel').slideToggle();
    });

    var WH = $(document).height();
    var SH = $('#section').height();
    var LH = $('.site-header').height();
    function setTop (){
        var MH = WH - SH - LH + 38 ;
        $(".main_nav").css('top', MH);
    }
    setTop();

});

function initMap() {
    // The location of Uluru
    var uluru = { lat: 39.099728, lng: -94.578568 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('googleMap'), { zoom: 8, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}