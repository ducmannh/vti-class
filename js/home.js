var listItem = [
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
  {
    name: "Iphone 14 Pro Max",
    manufacture: "Hãng sản xuất: Apple",
    image: "../images/png4.png",
    price: "24.800.000",
    star: "../images/download (3).png",
  },
];
$(document).ready(function () {
  for (let i = 0; i < listItem.length; i++) {
    $("#textContainer").append(
      "<div class='container4'> <img class='img4' src = '" +
        listItem[i].image +
        "'/> <p class='textName'>" +
        listItem[i].name +
        "</p> <p class='manufacture'>" +
        listItem[i].manufacture +
        "</p> <img class='img5' src = '" +
        listItem[i].star +
        "'/> <p class='price'>" +
        listItem[i].price +
        "</p> </div>"
    );
  }
});
$(document).click(function () {
  window.open("http://127.0.0.1:5500/html/login.html", "_blank");
});
