export function cartAction(items, id, action) {
  if (!items[id]) return

  if (action === "tambah") items[id].quantity += 1

  if (action === "kurang") {
    items[id].quantity -= 1

    if (items[id].quantity <= 0) delete items[id]
  }

  if (action === "hapus") delete items[id];
}
