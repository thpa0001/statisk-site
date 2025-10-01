console.log("Hej fra product.js");

const id = new URLSearchParams(window.location.search).get("id");
const productcontainer = document.querySelector(".produktcontainer");

getData(`https://kea-alt-del.dk/t7/api/products/${id}`);

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));
}
function showProduct(product) {
  console.log("showProduct: ", product);

  productcontainer.innerHTML += `<article>
  <div>
              <a href="javascript:history.back()" class="back-button">⟨ Tilbage</a>

          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
           </div>
            <div class="information">
          <h2>${product.productdisplayname}</h2>
          <h5>${product.brandname} | ${product.usagetype}</h5>
          <p>${product.price} DKK</p>
          <p>Læs mere:</p>
            </div>
              <div class="køb_boks">
            <label for="size">Choose a size</label><br>
            <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select><br>

            <button id="basket">Add to basket</button>
        </div>
      </article>`;
}
