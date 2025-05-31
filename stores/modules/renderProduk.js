export function renderProduk(produkList, container, onClickCallback) {
  produkList.forEach(produk => {
    const div = document.createElement("div")
    div.className = "produk";
    div.innerHTML = `
      <strong>${produk.name}</strong> - Rp ${produk.price}
      <button data-id="${produk.id}">🛒 Tambah</button>`

    div.querySelector("button").addEventListener("click", () => {
      onClickCallback(produk.id);
    });

    container.appendChild(div);
  });
}
