$(document).ready(function(){
//    this function shows an alert on the screen?
//    alert();
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle('fast');
    });
    
    window.onresize = function(event){
//        Will return an int?
//        alert($(window).width());
        if($(window).width() > 500){
            $(".sidebar").show();
        }
    };
});