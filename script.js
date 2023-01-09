let count = 0;
let text = "";
document.getElementById("evaluatedText").addEventListener("keyup", function () {
  text = document.getElementById("evaluatedText").value;
  console.log(text);
  count = text.length;
  document.getElementById("letterCount").innerText = count;
});