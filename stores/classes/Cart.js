import { renderProduk } from '../modules/renderProduk.js'
import { updateTable } from '../modules/updateTable.js'
import { tambahItem } from '../modules/tambahItem.js'
import { cartAction } from '../modules/cartAction.js';

export class Cart {
  constructor(products) {
    this.products = products;
    this.items = {};
    this.initElements();
    this.init();
  }

  initElements() {
    this.productElement = document.querySelector("#products")
    this.tbody = document.querySelector("#cart-table tbody")
    this.totalPriceElement = document.querySelector("#total")
    this.notificationElement = document.querySelector("#notification")
  }

  init() {
    renderProduk(this.products, this.productElement, this.addedItems.bind(this))
    this.attachListeners()
  }

  addedItems(id) {
    tambahItem(this.items, this.products, id)
    updateTable(this.items, this.tbody, this.totalPriceElement, this.notificationElement)
  }

  updateCart(id, action) {
    cartAction(this.items, id, action)
    updateTable(this.items, this.tbody, this.totalPriceElement, this.notificationElement)
  }

  attachListeners() {
    this.tbody.addEventListener("click", e => {
      const { id, action } = e.target.dataset
      if (id && action) this.updateCart(id, action)
    })
  }
}
