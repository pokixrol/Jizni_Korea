const towns =[
    {
       "id":"",
       "city":"",
       "peoples":11111,
       "sign":"",
       "text":""
    },
    {
       "id":"",
       "city":"",
       "peoples":11111,
       "sign":"",
       "text":""
    }
 ]


$(function(){
     let fillProvincie = $('.provincie').css('fill');
    $('.provincie').on('mouseover', function(){
        $('.provincie').css('fill', fillProvincie);
     $(this).css('fill','rgb(200, 16, 46)');
    });
    
    let fillMesto = $('.specialni_mesto').css('fill');
    $('.specialni_mesto').on('mouseover', function(){
        $('.specialni_mesto').css('fill', fillMesto);
     $(this).css('fill','rgb(0, 47, 108)');
    });
 
    let fillRect = $('rect').css('fill');
    $('rect').on('click', function(){
       $('rect').css('fill', fillRect);
     $(this).css('fill','yellow');
    console.log($(this).children('title').text());
    let id = $(this).attr('id');
     let mesto = towns.find(function(obj) { return obj.id == id});
     console.log(mesto);
 });
 })