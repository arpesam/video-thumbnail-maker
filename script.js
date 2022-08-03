const lessonTitleInputId = "#lesson-title-input";
const lessonTitleOutputId = "#lesson-title-output";
const lessonDurationInputId = "#lesson-duration-input";
const lessonDurationOutputId = "#lesson-duration-output";

function modifyTextOnDiv(inputId, outputId, extraText) {
  const input = document.querySelector(inputId).value;
  const output = document.querySelector(outputId);
  output.innerHTML = extraText + input;
}

function modifyLessonTitle() {
  modifyTextOnDiv(lessonTitleInputId, lessonTitleOutputId, "Lição: ");
}

function modifyLessonDuration() {
  modifyTextOnDiv(lessonDurationInputId, lessonDurationOutputId, "Duração: ");
}

function modifyTitleBgColor() {
  const input = document.querySelector("#bg-color-input").value;
  const output = document.querySelector("#bg-color-output");
  output.style.backgroundColor = input;
}

function modifyTextColor() {
  const input = document.querySelector("#text-color-input").value;
  const output = document.querySelector("#bg-color-output");
  output.style.color = input;
}

function addToDivBackground(base64) {
  console.log("base", base64);
  const bgDiv = document.querySelector(".background");
  bgDiv.style.backgroundImage = `url("${base64}")`;
}

function load() {
  console.log("loaded");
  const readBtn = document.body.querySelector("#read-file-btn").files;
  const reader = new FileReader();
  reader.onloadend = () => addToDivBackground(reader.result);
  reader.readAsDataURL(readBtn[0]);
}

function capture() {
  console.log("haha");
  var el = document.body.querySelector(".container");

  html2canvas(el).then(function (canvas) {
    console.log(canvas);
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png", 0.1);
    link.download = "screenshot.png";
    link.click();
  });
}
