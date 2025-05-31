import { updateNotifikasi } from './updateNotifikasi.js'

export function updateTable(items, tbody, totalHargaEl, notifikasiEl) {
	tbody.innerHTML = "";
	let total = 0;

	for (const id in items) {
		const item = items[id]
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

		tbody.appendChild(row)
	}

	totalHargaEl.textContent = `Rp ${total}`

	updateNotifikasi(items, notifikasiEl)
}
