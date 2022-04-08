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
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    //adjust price to 2 decimal places
    var price = parseFloat(arg[i].price).toFixed(2);

    items +=
      "<li><span class='itemName'>" +
      arg[i].name +
      "</span><span class='itemPrice'>$" +
      price +
      "</span></li>";

    //adds spice icon to description if menu item is spicy
    if (arg[i].spicy === true) {
      items +=
        "<li class='itemDesc'>" +
        arg[i].description +
        "<span class='spicy'></span>" +
        "</li>";
    } else {
      items += "<li class='itemDesc'>" + arg[i].description + "</li>";
    }
  }

  return items;
}

document.getElementById("startersList").innerHTML = generateItems(
  groupByType.starters
);

document.getElementById("pastasList").innerHTML = generateItems(
  groupByType.pasta
);

document.getElementById("pizzaList").innerHTML = generateItems(
  groupByType.pizza
);
