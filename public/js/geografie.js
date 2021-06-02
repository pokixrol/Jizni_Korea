$(function(){
    $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(1000);
    });


})