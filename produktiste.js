console.log("Hej fra productlist.js");

const season = new URLSearchParams(window.location.search).get("season");
const productcontainer = document.querySelector(".side-container");

getData(`https://kea-alt-del.dk/t7/api/products?season=${season}`);

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showProducts(data));
}
function showProducts(products) {
  console.log("showproducts: ", products);

  productcontainer.innerHTML = "";

  products.forEach((product) => {
    productcontainer.innerHTML += `
         <article class="card ${product.soldout ? "soldOut" : ""} ${product.discount ? "discount" : ""}" >

    <a href="product.html?id=${product.id}">
    <div class="imageContainer">  
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
      <p>SOLD OUT</p>
    </div>
          <h2>${product.productdisplayname}</h2>
          <h5>${product.brandname} | ${product.usagetype}</h5>
          <p>${product.price} DKK</p>
           <div class="discounted_container">
        <p>
          Now DKK <span>${product.price - (product.price * product.discount) / 100}</span>,-
        </p>
        <p>
          <span>${product.discount}</span> %
        </p>
      </div>
          <p>Læs mere:</p>
        </a>
      </article>`;
  });
}
