$(function () {
  $("#btnSubmit").click(function () {
    alert("Message");
  });

  $("<div>").appendTo("body");

  let alertText = function (event) {
    event.preventDefault();
    let value = $("input#formText").val();
    if (value == null || value == "") {
      //Do Nothing
    } else {
      alert(value);
      // Commented out code for h2, due to instruction number 11.
      // $('<h2 class = "form_value">').appendTo('div');
      // $('h2').text(value);

      let theList = $("ul.list_class").val();

      let listValues = "<li>" + value + "</li>";

      if (theList == null) {
        $('<ul class = "list_class">').appendTo("body");
        $("ul").append(listValues);
      } else {
        $("ul").append(listValues);
      }

      let getRandomColor = function () {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

      $("li").click(function () {
        $(this).css("color", getRandomColor);
      });

      $("li").dblclick(function () {
        $(this).remove();
      });
    };
  };

  $("#formSubmit").click(alertText);
});
