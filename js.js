class Drink {  
  constructor (size, sugar) {    
    this.size = size;
    this.sugar = sugar;      
  }
}

class Espresso extends Drink {
  constructor() {
    super("small", true);   
    this.price = this.calcPrice();
  }
  calcPrice() {
    let price;
      if (this.size == "small") {      
      price = 99;
    }         
    else if (this.size == "middle") {      
      price = 129;
      }      
    else {     
      price = 149;
      } 
      return price;
    }    
  }

  class Americano extends Drink {
    constructor() {
      super("small", true);   
      this.price = this.calcPrice();
    }  
    calcPrice() {
      let price;
        if (this.size == "small") {      
        price = 129;
      } 
      else if (this.size == "middle") {      
        price = 149;
        }
      else {     
        price = 169;
        } 
        return price;     
      }
    } 

  class Latte extends Drink {
    constructor() {
      super("small", true);
      this.milkType = "cow";
      this.price = this.calcPrice();
    }
  calcPrice() {
    let price;
    if (this.size == "small") {
      if (this.milkType == "cow"){
      price = 149;
      }
      else {
        price = 169;
      }
    }
    else if (this.size == "middle") {
      if (this.milkType == "cow"){
      price = 169;
      }
      else {
        price = 189;
      }
    }
    else if (this.size == "big") {
      if (this.milkType == "cow"){
      price = 189;
      }
      else {
        price = 209;
      }
    }
  }
}

class Cocoa extends Drink {
  constructor() {
    super("small", true);
    this.milkType = "cow";
    this.price = this.calcPrice();
  }
calcPrice() {
  let price;
  if (this.size == "small") {
    if (this.milkType == "cow"){
    price = 159;
    }
    else {
      price = 179;
    }
  }
  if (this.size == "middle") {
    if (this.milkType == "cow"){
    price = 179;
    }
    else {
      price = 199;
    }
  }
  if (this.size == "big") {
    if (this.milkType == "cow"){
    price = 199;
    }
    else {
      price = 229;
    }
  }
}
}



let cupDrink; 

//создание div с опциями
let divOptions = document.getElementById("drink_options");
let selectSize = document.createElement("select");
selectSize.setAttribute("id", "size");
selectSize.setAttribute("name", "select");
selectSize.append(createOption("small", "Маленький"));
selectSize.append(createOption("middle", "Средний"));
selectSize.append(createOption("small", "Большой"));


let divSugar = document.createElement("div");

let inputSugar = document.createElement("input");
inputSugar.setAttribute("type", "checkbox");
inputSugar.setAttribute("id", "sugar");
inputSugar.setAttribute("name", "sugar");
//inputSugar.setAttribute("checked");
let labelSugar = document.createElement("label");
labelSugar.setAttribute("for", "sugar");

let pPrice = document.createElement("p");
pPrice.setAttribute = ("id", "price");

let selectMilk = document.createElement("select");
selectMilk.setAttribute("id", "milk");
selectMilk.setAttribute("name", "select");
selectMilk.append (createOption("cow","Коровье"));
selectMilk.append (createOption("coconut","Кокосовое"));
selectMilk.append (createOption("almond","Миндальное"));

//сделать метод, который создает опцию - с параметрами атрибутов и текстом
function createOption (value, text) {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = text;
  return option;
}

//создание дива с опциями в зависимости от параметра - объект какого класса у нас 
function createOptions (cupDrink) {
  divOptions.append(selectSize);
  divSugar.append(inputSugar);
  divSugar.append(labelSugar); 
  divOptions.append(divSugar);
  divOptions.append(pPrice);
if (cupDrink.hasOwnProperty("milkType")) { 
  divOptions.append(selectMilk);
}
}

function getTypeValue() {
  let typeDrinkElements = document.getElementsByName('typeDrink');

  for (i = 0; i < typeDrinkElements.length; i++) {
      if (typeDrinkElements[i].checked) {
        return typeDrinkElements[i].value;
      }
  }
}

//создать объект нужного класса на событие выбор пользователем
let drinkItems = document.querySelectorAll(".drink_item");
for (let item of drinkItems) {

item.addEventListener("click", function() {
  let typeDrink = getTypeValue();
  if (typeDrink == "espresso") {
    cupDrink = new Espresso();    
  }
  if (typeDrink == "americano") {
    cupDrink = new Americano();    
  }
  if (typeDrink == "latte") {
    cupDrink = new Latte();    
  }
  if (typeDrink == "cocoa") {
    cupDrink = new Cocoa();    
  }
  createOptions (cupDrink);
});

}

//let sizeDrink = document.getElementById("size").value;


//заполнить Ваш заказ

//вывести в тайтл в строку: название, молоко, сахар
//вывести в цену цену








