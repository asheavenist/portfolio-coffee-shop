class Keranjang {
  constructor(produkList) {
    this.produkList = produkList
    this.items = {}
    this.initElements()
    this.renderProduk()
    this.attachListeners()
  }

  initElements() {
    this.daftarProdukEl = document.getElementById("daftar-produk")
    this.tbody = document.querySelector("#keranjang-tabel tbody")
    this.totalHargaEl = document.getElementById("total-harga")
    this.notifikasiEl = document.getElementById("notifikasi")
    this.form = document.getElementById("keranjang-form")
    this.resultBox = document.getElementById("result")
  }

  renderProduk() {
    this.produkList.forEach(produk => {
      const div = document.createElement("div")
      div.className = "produk"
      div.innerHTML = `
        <strong>${produk.name}</strong> - Rp ${produk.price}
        <button data-id="${produk.id}">🛒 Tambah</button>`

      this.daftarProdukEl.appendChild(div);
    })
  }

  updateNotifikasi() {
    const total = Object.values(this.items).reduce((sum, item) => sum + item.quantity, 0)
    this.notifikasiEl.textContent = total
  }

  updateTable() {
    this.tbody.innerHTML = ""
    let total = 0

    for (const id in this.items) {
      const item = this.items[id]
      const subtotal = item.price * item.quantity
      total += subtotal

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}<input type="hidden" name="produk[${id}][name]" value="${item.name}"></td>
        <td>Rp ${item.price}<input type="hidden" name="produk[${id}][price]" value="${item.price}"></td>
        <td>
          <button type="button" data-action="kurang" data-id="${id}">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="tambah" data-id="${id}">+</button>
          <input type="hidden" name="produk[${id}][quantity]" value="${item.quantity}">
        </td>
        <td>Rp ${subtotal}</td>
        <td><button type="button" data-action="hapus" data-id="${id}">🗑️</button></td>`

      this.tbody.appendChild(row);
    }

    this.totalHargaEl.textContent = `Rp ${total}`
    this.updateNotifikasi()
  }

  tambahItem(id) {
    const produk = this.produkList.find(p => p.id == id)
    if (!produk) return

    if (!this.items[id]) {
      this.items[id] = { ...produk, quantity: 1 }
    } else {
      this.items[id].quantity += 1
    }

    this.updateTable();
  }

  aksiKeranjang(id, action) {
    if (!this.items[id]) return

    if (action === "tambah") {
      this.items[id].quantity += 1
    } else if (action === "kurang") {
      this.items[id].quantity -= 1
      if (this.items[id].quantity <= 0) delete this.items[id]
    } else if (action === "hapus") {
      delete this.items[id]
    }

    this.updateTable()
  }

  attachListeners() {
    this.daftarProdukEl.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON") {
        this.tambahItem(e.target.dataset.id)
      }
    })

    this.tbody.addEventListener("click", e => {
      const { id, action } = e.target.dataset
      if (id && action) this.aksiKeranjang(id, action)
    })

    this.form.addEventListener("submit", e => {
      e.preventDefault()
      const formData = new FormData(this.form)

      fetch("proses.php", {
        method: "POST",
        body: formData
      })
        .then(res => res.text())
        .then(data => {
          this.resultBox.innerHTML = `<strong>Respon Server:</strong><pre>${data}</pre>`
        })
        .catch(err => {
          this.resultBox.innerHTML = `<strong>Error:</strong> ${err}`
        });
    });
  }
}

// Data Produk
const produkList = [
  { id: 1, name: "Produk A", price: 10000 },
  { id: 2, name: "Produk B", price: 15000 },
  { id: 3, name: "Produk C", price: 20000 },
  { id: 4, name: "Produk D", price: 25000 },
  { id: 5, name: "Produk E", price: 30000 },
]

// Inisialisasi
const keranjang = new Keranjang(produkList)
