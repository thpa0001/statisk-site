console.log("script loaded...");

const produkt = document.querySelector("#produktside");
const produktinfo = ["football jersey"];

let listItems = produktinfo.map((titel) => `<li>${titel}</li>`).join("");

produktside.innerHTML = listItems;

console.log("Nyt array", listItems);

function hentData() {
  console.log("hentData");
  fetch("produkt.json")
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(data) {
  console.log("visProdukt");

  const altProdukt = data.jersey;
  let arrayMedJersey = altProdukt.map(
    (troje) =>
      `<article class= "product_card" 
  <h3>${troje.titel}</h3>
    <p>Price:${troje.price}</p>
  <p>Gender:${troje.gender}</p>
    <p>Display name:${troje.productdisplayname}</p>

    <p>Category:${troje.category}</p>

  </article>
   `
  );
  console.log("arrayMedJersey:", arrayMedJersey);

  produktside.innerHTML = arrayMedJersey.join("");
}

hentData();
