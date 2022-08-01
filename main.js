let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "one",
    name: "Saree",
    desc: "A beautiful red Silk Saree",
    price: 1020,
    img: "images/Saree.jpg",
  },
  {
    id: "two",
    name: "Hoodie",
    desc: "A beautiful Hoodie",
    price: 859,
    img: "images/Hoodie.jpg",
  },
  {
    id: "three",
    name: "Jean",
    desc: "Set of comfortable jean",
    price: 1150,
    img: "images/Jeans.jpg",
  },
  {
    id: "four",
    name: "Dress",
    desc: "A beautiful dress",
    price: 999,
    img: "images/Dress.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("key")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, desc, price, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `<div  id = product-id-${id} class="item">
      <img width="200" src=${img} alt="Saree">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2> <i class="bi bi-currency-rupee">${price}</i></h2>
          <div class="buttons">
            <i  onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div  id = ${id} class="quantity">
            ${search.item === undefined ? 0 : search.item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join(""));
};
generateShop();

//increment , decrement function

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("key", JSON.stringify(basket));
  update(selectedItem.id);
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("key", JSON.stringify(basket));
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
