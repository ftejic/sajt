$(document).ready(function(){

    $('#checkbox').click(function(){
        if($(this).is(':checked')){
            $('body').removeClass('light');
            $('body').addClass('dark');
        }else{
            $('body').removeClass('dark');
            $('body').addClass('light');
        }
    });

    

});