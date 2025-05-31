export function tambahItem(items, produkList, id) {
	const produk = produkList.find(p => p.id == id);
	if (!produk) return;

	if (!items[id]) {
		items[id] = { ...produk, quantity: 1 };
	} else {
		items[id].quantity += 1;
	}
}
