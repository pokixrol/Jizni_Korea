$(function () {
  let fillProvincie = $(".provincie").css("fill");
  $(".provincie").on("mouseover", function () {
    if ($("#kraje:checked").val()) {
      $(".provincie").css("fill", fillProvincie);
      $(this).css("fill", "rgb(200, 16, 46)");
      $(this).popover({
        trigger: "click",
        placement: "right",
        offset: "-10, -100",
        title: $(this).find("title").text(),
      });
    }
  });
  $(".provincie").on("mouseout", function () {
    $(this).css("fill", fillProvincie);
  });
  function townsBlock(towns) {
    let fillMesto = $("rect, .specialni_mesto").css("fill");
    $("rect, .specialni_mesto").on("click", function () {
      if ($("#mesta:checked").val()) {
        $("rect, .specialni_mesto").css("fill", fillMesto);
        $(this).css("fill", "rgb(51, 204, 255)");
        console.log($(this).children("title").text());
        let id = $(this).attr("id");
        let mesto = towns.find((item) => {
          return item.id == id;
        }); 
        console.log(mesto);
        $("#info").fadeOut(1000, function () {
          $("#info").html(
            `<div class="col-12"><h2>${
              mesto.city
            } <small class="text-small">${new Intl.NumberFormat("cs-CS").format(
              mesto.peoples
            )} obyvatel</small></h2></div><div class="col-2"><img src="../geografie/images/${
              mesto.img
            }" class="img-fluid"></div><div class="col-10">${mesto.text}</div>`
          );
        });
        $("#info").fadeIn(1000);
      }

    });
  }

  fetch("../geografie/data/towns.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      townsBlock(json);
    })
    .catch(function (error) {
      console.error("Chyba: \n", error);
    });
  function unescoBlock(unesco) {
    $("circle").hide();
    $("#mesta").on("change", function () {
      $("rect").toggle(500);
      $(".specialni_mesto").css("fill", fillProvincie);
    });
    $("#unesco").on("change", function () {
      $("circle").toggle(500);
    });
    let fillUnesco = $("circle").css("fill");
    $("circle").on("click", function () {
      $("circle").css("fill", fillUnesco);
      let id = $(this).attr("id");
      $(this).css("fill", "rgb(51, 204, 255)");
      let pamatka = unesco.find((item) => {
        return item.id == id;
      });
      $("#info").slideUp(1000, function () {
        $("#info").html(
          `<div class="col-12"><h2>${pamatka.name} <small class="text-small">(od roku ${pamatka.year})</small></h2></div><div class="col-4"><img src="../geografie/images/${pamatka.photo}" class="img-fluid"></div><div class="col-8"><p>${pamatka.description}</p><p><a href="${pamatka.url}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div>`
        );
      });
      $("#info").slideDown(1000);
    });
  }
  fetch("../geografie/data/unesco.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      unescoBlock(json);
    })
    .catch(function (error) {
      console.error("Chyba: \n", error);
    });
});
