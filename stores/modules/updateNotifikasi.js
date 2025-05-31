export function updateNotifikasi(items, iconEl) {
	const total = Object.values(items).reduce((sum, item) => sum + item.quantity, 0)
	iconEl.textContent = total
}
