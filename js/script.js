
let Eggs = {Item:"Carton Of Eggs",
          Price: 5.99,
          Quantity: 1,
          Aisle: "Meat",
          img_link: "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/99-994169_macronutrients-proteins-lipids-carbohydrates-etc-classification-of-food-ppt.png?v=1674633864461"
          }
let Bask = {Item:"Gallon Of Milk",
          Price: 7.50,
          Quantity: 1,
          Aisle: "Produce",
          img_link: "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/11665860299jkx6a5ldbraz291mud5bw8hxhbmjysbsp3nijx6x50mbwaxgif05y8awqaoskakhez5vdyjp9ortoi4nmqxfjn7phlkxlbrbvrz9.png?v=1674633864118"
          }
let Mano = {Item:"Snickers Bar",
          Price: 1.99,
          Quantity: 1,
          Aisle: "Candy",
          img_link: "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/386-3861491_halloween-candy-border-clip-art-bowl-of-candy.png?v=1674633864697"
          }

// let total = 0;

let defaultShopping = [Eggs, Bask, Mano];
  
  
function display() {
  let shopInd = 0;
  let total = 0;
  defaultShopping.forEach(function(good){
  console.log(good);
  total += good.Price;
  $('.display').append(`<div class="bigdiv"> <div class="flex-container"> <div><p>Item #${shopInd}</p></div> <div><img class="images" src=${good.img_link}></img></div> <div><p>${good.Item}</p></div> <div><p>${good.Price}</p></div> <div><p>x${good.Quantity}</p></div> <div><p>${good.Aisle}</p></div> <div><div class="buttons"><button class="up">↑</button> <button class="down">↓</button></div></div>  <div><div class="buttons"><button class="plus">+</button> <button class="minus"> --</button></div></div> <div><button class="delete"> DELETE </button></div> </div> </div>`);
  shopInd++;
    
// $('.display').append(`<div class="flex-container"> <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div> </div>`);
//   $('.images').append(`<img src=${good.img_link}></img>`);
//   $('.items').append(`<p>${good.Item}</p>`);
//   $('.prices').append(`<p>${good.Price}</p>`);
//   $('.aisles').append(`<p>${good.Aisle}</p>`);
    
  $('#totalL').html(`Current Shopping List Length: ${defaultShopping.length} item(s)`);
  $('#totalW').html(`Total Cost: $${total}`);
});
}

function emptyList() {
  $('.display').empty();
}

function addItem() {
  let userItem = $('.items').val();
  let userPrice = Number($('.prices').val());
  let userQuantity = Number($('.quantities').val());
  let userAisle = $('.aisles').val();
  let defaultImg = "https://cdn.iconscout.com/icon/free/png-256/picture-145-452356.png";
  
let PRODUCE = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/Image-vegetables-food-clip-art-christart.png?v=1674633862136";
let SELFCARE = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/Asset-1a-2-768x453.png?v=1674633862404";
let DAIRY = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/11665860299jkx6a5ldbraz291mud5bw8hxhbmjysbsp3nijx6x50mbwaxgif05y8awqaoskakhez5vdyjp9ortoi4nmqxfjn7phlkxlbrbvrz9.png?v=1674633864118";
let DRY_GOODS = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/dry-canning-a-long-term-storage-method.png?v=1674633866869";
let FROZEN_GOODS = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/2681807.png?v=1674633865982";
let BAKED_GOODS =  "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/237-2374291_sandwich-clip-art-vector-grain-food-group-clipart.png?v=1674633863861";
let CANNED_GOODS = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/337-3377742_cans-cans-clipart-png.png?v=1674633862818";
let MEAT = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/99-994169_macronutrients-proteins-lipids-carbohydrates-etc-classification-of-food-ppt.png?v=1674633864461";
let HEALTH = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/1994125.png?v=1674633866515";
let CLEANING = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/158-1584609_royalty-free-cleaning-supplies-clipart-cleaning-products-clipart.png?v=1674633865571";
let BEVERAGES = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/37-371223_coca-cola-bottle-clip-art-soft-drinks-clipart.png?v=1674633863384";
let SNACKS = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/Snack-clipart-free-download-clip-art-on-2.png?v=1674633864922";
let SWEETS = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/386-3861491_halloween-candy-border-clip-art-bowl-of-candy.png?v=1674633864697";
let MISC = "https://cdn.glitch.global/34779279-68be-4516-abb4-8de4b6fcaae0/1191px-Empty_shopping_cart_clip_art.svg.png?v=1674633865182";

  let userFullShop = {Item: userItem, Price: userPrice, Aisle: userAisle, Quantity: userAisle, Image: defaultImg};
  
if (userAisle.toLowerCase() === "produce") {
userFullShop.Image = PRODUCE;
}
else if ( (userAisle.toLowerCase() === "self care") || (userAisle.toLowerCase() === "self-care")) {
userFullShop.Image = SELFCARE;
}
else if (userAisle.toLowerCase() === "dairy") {
userFullShop.Image = DAIRY;
}
  else if (userAisle.toLowerCase() === "dry goods") {
userFullShop.Image = DRY_GOODS;
}
  else if (userAisle.toLowerCase() === "frozen goods") {
userFullShop.Image = FROZEN_GOODS;
}
  else if (userAisle.toLowerCase() === "baked goods") {
userFullShop.Image = BAKED_GOODS;
}
  else if (userAisle.toLowerCase() === "canned goods") {
userFullShop.Image = CANNED_GOODS;
}
  else if (userAisle.toLowerCase() === "meat") {
userFullShop.Image = MEAT;
}
  else if (userAisle.toLowerCase() === "health") {
userFullShop.Image = HEALTH;
}
  else if (userAisle.toLowerCase() === "cleaning") {
userFullShop.Image = CLEANING;
}
  else if (userAisle.toLowerCase() === "snacks") {
userFullShop.Image = SNACKS;
}
else if (userAisle.toLowerCase() === "beverages") {
userFullShop.Image = BEVERAGES;
}
  else if (userAisle.toLowerCase() === "sweets") {
userFullShop.Image = SWEETS;
}
else {
userFullShop.Image = MISC;
}
  
  
  console.log("testing here - add shop function");
  
  defaultShopping.push(userFullShop);
  console.log(defaultShopping);
  
emptyList();  
display();
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


$(".add").click(function() {
  emptyList();
  addItem();
});


$("body").on('click', 'button.up', function() {
  console.log("MOVE MOVE MOVE");
  let oneIndex = prompt("Please enter the index of this item");
  let twoIndex = prompt("Please enter the index where you want to move this item to.");
 
  let temp = defaultShopping[oneIndex];
  
  defaultShopping[oneIndex] = defaultShopping[twoIndex];
  defaultShopping[twoIndex] = temp;
  
  emptyList();
  display();
});

$("body").on('click', 'button.plus', function() {
  console.log("Q CHANGE");
  let thisItem = prompt("Please enter the index of this item");  
  defaultShopping[thisItem].Quantity += 1;
  console.log(defaultShopping[thisItem].Quantity);
  emptyList();
  display();
});

$("body").on('click', 'button.minus', function() {
  console.log("Q CHANGE");
  let oneIndex = prompt("Please enter the index of this item");  
  defaultShopping[oneIndex].Quantity--;
  emptyList();
  display();
});

$("body").on('click', 'button.delete', function() {
  console.log("DELETE DELETE DELETE");
  let delIndex = prompt("Enter the index of the item you want to remove.");
  // total -= defaultShopping[delIndex].Price;
  defaultShopping.splice(delIndex,1);
    console.log("seperator");
  console.log(defaultShopping);
    console.log("seperator");
  emptyList();
  display();
});


// $(".down").click(function() {
// alert("TESTING");
// });

// $(".delete").click(function() {
//   console.log("DELETE DELETE DELETE");
//   let delIndex = prompt("Enter the index of the item you want to remove.");
//   defaultShopping.splice(delIndex,1);
//     console.log("seperator");
//   console.log(defaultShopping);
//     console.log("seperator");
//   emptyList();
//   display();
// });

$("#shuffle").click(function() {
  shuffle(defaultShopping);
    console.log("seperator");
  console.log(defaultShopping);
    console.log("seperator");
  emptyList();
  display();
});

display();

