$(function(){
    $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(1000);
    });
    $("#reky").hide();
    $("#river").on("click", function(){
        $("#idk").hide(500);
        $("#reky").show(1000);
    });

})