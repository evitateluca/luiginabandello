// jquery init

$(document).ready(function () {

    $('iframe').on('load', function(){ 
        $(this).contents().find('#page-region').css('background-color', 'red');
    });
    
});