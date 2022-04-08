import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

//sort the menu items by their menuOrder prior to grouping
menuItems.sort((a, b) => a.menuOrder - b.menuOrder);

const groupByType = menuItems.reduce((acc, item) => {
  //initialize the group
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  //grouping
  acc[item.type].push(item);
  return acc;
}, {});

function generateItems(arg) {
  //initialize empty string for HTML
  let items = "";

  //itterate through the array and create HTML with correct data
  for (let i = 0; i < arg.length; i++) {
    //adjust price to 2 decimal places
    var price = parseFloat(arg[i].price).toFixed(2);

    //spicy items have spicyItem class which is used when spicy food checkbox is clicked
    //spicy items also have an icon next to their title
    if (arg[i].spicy === true) {
      items +=
        "<div class='spicyItem'><li><span class='itemName'>" +
        arg[i].name +
        "<span class='spicy'></span>";
    } else {
      items += "<div><li><span class='itemName'>" + arg[i].name;
    }

    items +=
      "</span><span class='itemPrice'>$" +
      price +
      "</span></li><li class='itemDesc' >" +
      arg[i].description +
      "</li></div>";
  }

  return items;
}

window.displaySpicyMenu = function () {
  var checkbox = document.getElementById("spicyCheck");
  var spicyMenuItems = document.getElementsByClassName("spicyItem");
  var i;
  if (checkbox.checked === false) {
    for (i = 0; i < spicyMenuItems.length; i++) {
      console.log(spicyMenuItems[i]);
      spicyMenuItems[i].style.display = "none";
    }
  } else {
    for (i = 0; i < spicyMenuItems.length; i++) {
      console.log(spicyMenuItems[i]);
      spicyMenuItems[i].style.display = "inline";
    }
  }
};

document.getElementById("startersList").innerHTML = generateItems(
  groupByType.starters
);

document.getElementById("pastasList").innerHTML = generateItems(
  groupByType.pasta
);

document.getElementById("pizzaList").innerHTML = generateItems(
  groupByType.pizza
);
