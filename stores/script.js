import { Cart } from './classes/Cart.js';

const produkList = [
  { id: 1, name: "Produk A", price: 10000 },
  { id: 2, name: "Produk B", price: 15000 },
  { id: 3, name: "Produk C", price: 20000 },
  { id: 4, name: "Produk D", price: 25000 },
  { id: 5, name: "Produk E", price: 30000 },
];

new Cart(produkList);

let form = document.querySelector("#cart-form"),
  resultBox = document.querySelector("#server-result")

form.addEventListener("submit", e => {
  e.preventDefault()

  const formData = new FormData(form);
  fetch("proses.php", {
    method: "POST",
    body: formData
  }).then(res => res.text())
    .then(data => {
      resultBox.innerHTML = `<strong>Respon Server:</strong><pre>${data}</pre>`
    })
    .catch(err => {
      resultBox.innerHTML = `<strong>Error:</strong> ${err}`
    })
})
