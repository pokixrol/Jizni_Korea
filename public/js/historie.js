$(function(){

    $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(1000);
    });
function eventsBlock(events){
   events.forEach((event)=>{

      $("#udalosti tbody").append(`<tr>
          <td class="event-year">${event.year}</td>
          <td>
            <p class="event-name"><i class="fas fa-chevron-down"></i><span> ${event.name}</span></p>
            <p class="event-text">${event.text}</p>
          </td>            
      </tr>`);
  });

  $(".event-text").hide();

    $(".event-name i, .event-name span, .event-name a").on("click", function(){
        $("#udalosti tr, #sestarepublika tr ").removeClass("bg-secondary text-white");
        //$("#event-name a").css({"color":"white"});
        $(this).parents("tr").addClass("bg-secondary text-white");
      //$("#udalosti tr, #sestarepublika tr ").css({"background-color":"white"});
     // $(this).parents("tr").css({"background-color":"#ccc"});
        $(".event-text").hide();
        $(this).parent().next().show(500);
    });  
}

fetch('../historie/data/events.json')
.then(response => {
   console.log(response);
   return response.json()
})
.then(json => {
   console.log(json);
   eventsBlock(json);
})
.catch(function (error) {
   console.error('Chyba: \n', error);
});

function prezidentiBlock(prezidenti){
    prezidenti.forEach((prezidenti)=>{
        $("#sestarepublika tbody").append(`<tr>
        <td class="event-year">${prezidenti.year}</td>
        <td>
          <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${prezidenti.url}" target="_new">${prezidenti.name}</a></p>
          <p class="event-text">${prezidenti.text}</p>
        </td>            
        </tr>`);
       
        });
        
  $(".event-text").hide();

  $(".event-name i, .event-name span, .event-name a").on("click", function(){
      $("#udalosti tr, #sestarepublika tr ").removeClass("bg-secondary text-white");
      //$("#event-name a").css({"color":"white"});
      $(this).parents("tr").addClass("bg-secondary text-white");
    //$("#udalosti tr, #sestarepublika tr ").css({"background-color":"white"});
   // $(this).parents("tr").css({"background-color":"#ccc"});
      $(".event-text").hide();
      $(this).parent().next().show(500);
  });  
}

fetch('../historie/data/prezidenti.json')
.then(response => {
   console.log(response);
   return response.json()
})
.then(json => {
   console.log(json);
   prezidentiBlock(json);
})
.catch(function (error) {
   console.error('Chyba: \n', error);
});

function heroesBlock(heroes){
   heroes.forEach((hero)=>{
      $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
  });  
  $("#postavy li:first").addClass('active');
  fillPersonCard(heroes, heroes[0].name);
  $("#postavy li").on("click", function(){
      $("#postavy li").removeClass("active");
      $(this).addClass("active");        
      let person = $(this).text();
      $("#portret").slideUp(1000, function(){
          fillPersonCard(heroes, person);
      });
      $("#portret").slideDown(1000);
  });
}

  function fillPersonCard(heroes, person) {
      let hero = heroes.find(item => {return item.name === person});
      $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> <i class="${hero.cross}"></i> <b>${hero.death}</b>`);
      $(".card-title").text(hero.name);
      $(".card-text").text(hero.biography);
      $(".card-footer").html(`Pro více informací klikněte <a href="${hero.url}" target="_blank"><b>ZDE</b></a>.`);
      $(".gallery").empty();
      for (let i = 0; i < hero.portraits.length; i++) {
          $(".gallery").append(`<div class="${hero.class}"><img src="../historie/images/${hero.portraits[i]}" alt="" class="img-fluid postavyzdejin"></div>`);        
      }
  }

  fetch('../historie/data/heroes.json')
   .then(response => {
      console.log(response);
      return response.json()
   })
   .then(json => {
      console.log(json);
      heroesBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });

})