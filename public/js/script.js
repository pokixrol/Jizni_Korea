$(function(){
    $("#stihacky").hide();
    $(" h2").on("click", function(){
        $(this).nextUntil("h2").toggle(1000);
    });
    //$("h3:even").append().css({"color" : "blue"});
    $("#susButton").on("click", ()=>{
        $("main").hide();
        $("footer").hide();
        $("nav").hide();
        $("p").text("ha ha");
        $("header").removeClass("jumbotron-fluid bg-secondary");
        $("h1").text("Letí dvě stíhačky a jedna nestíhá");
        $("#stihacky").show();
        
    });
});