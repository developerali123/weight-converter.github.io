var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var kg = parseFloat(document.getElementById("kg").value);
  var pound = kg * 2.2046;
  var n = pound.toFixed(2);
  document.getElementById("output").innerHTML = "your weight in pound is  " + n;
});
