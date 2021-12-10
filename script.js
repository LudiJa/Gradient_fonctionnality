// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.querySelector(".change");

// function changeGradient() {
//   body.style.background =
//     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// }

// color1.addEventListener("input", changeGradient);
// color2.addEventListener("input", changeGradient);

$(`.color1`).on(`input`, (e) => {
  $(`.change`).css(
    `background`,
    `linear-gradient(to right bottom, ${$(".color1").val()}, ${$(
      ".color2"
    ).val()}`
  );
});

$(`.color2`).on(`input`, (e) => {
  $(`.change`).css(
    `background`,
    `linear-gradient(to right bottom, ${$(".color1").val()}, ${$(
      ".color2"
    ).val()}`
  );
});
