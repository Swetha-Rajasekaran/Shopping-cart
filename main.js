let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: 1,
    name: "Saree",
    desc: "A beautiful red Silk Saree",
    price: 1020,
    img: "images/Saree.jpg",
  },
  {
    id: 2,
    name: "Hoodie",
    desc: "A beautiful Hoodie",
    price: 859,
    img: "images/Hoodie.jpg",
  },
  {
    id: 3,
    name: "Jeans",
    desc: "A beautiful jeans",
    price: 1150,
    img: "images/Jeans.jpg",
  },
  {
    id: 4,
    name: "Dress",
    desc: "A beautiful dress",
    price: 999,
    img: "images/Dress.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, desc, price, img } = x;
      return `<div  id = product-id-${id} class="item">
      <img width="200" src=${img} alt="Saree">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2> <i class="bi bi-currency-rupee">${price}</i></h2>
          <div class="buttons">
            <i class="bi bi-dash-lg"></i>
            <div  id = ${id} class="quantity">0</div>
            <i class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join(""));
};
generateShop();
