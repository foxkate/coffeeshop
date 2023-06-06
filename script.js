let elements = document.querySelectorAll("select");
for (let elem of elements) {
  addEventListener("change", showResult);
}

function showResult() {
let title = document.getElementById("type").value;
let size = document.getElementById("size").value;

if (title == "value1") {
  document.getElementById("title").innerHTML = 'Американо';
  document.getElementById("recept").innerHTML = 'Американо рецепт';
  if (size == "value1") {
    document.getElementById("price").innerHTML = '99р.';
  }
  if (size == "value2") {
    document.getElementById("price").innerHTML = '129р.';
  }
  if (size == "value3") {
    document.getElementById("price").innerHTML = '149р.';
  }
}
if (title == "value2") {
  document.getElementById("title").innerHTML = 'Латте';
  document.getElementById("recept").innerHTML = 'Латте рецепт';
  if (size == "value1") {
    document.getElementById("price").innerHTML = '129р.';
  }
  if (size == "value2") {
    document.getElementById("price").innerHTML = '159р.';
  }
  if (size == "value3") {
    document.getElementById("price").innerHTML = '199р.';
  }
}

 
};



