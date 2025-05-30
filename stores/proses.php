<?php
// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['produk'])) {
//     $produk = $_POST['produk'];
//     echo "<h2>Data Belanjaan yang Diterima</h2>";
//     echo "<table border='1' cellpadding='10'>";
//     echo "<tr><th>Nama Produk</th><th>Harga</th><th>Jumlah</th><th>Subtotal</th></tr>";

//     $total = 0;
//     foreach ($produk as $item) {
//         $nama = htmlspecialchars($item['name']);
//         $harga = (int) $item['price'];
//         $jumlah = (int) $item['quantity'];
//         $subtotal = $harga * $jumlah;
//         $total += $subtotal;

//         echo "<tr>
//                 <td>{$nama}</td>
//                 <td>Rp {$harga}</td>
//                 <td>{$jumlah}</td>
//                 <td>Rp {$subtotal}</td>
//               </tr>";
//     }

//     echo "<tr><td colspan='3'><strong>Total</strong></td><td><strong>Rp {$total}</strong></td></tr>";
//     echo "</table>";
// } else {
//     echo "<p>Tidak ada data belanja yang dikirim.</p>";
// }
//

echo "<pre>";
print_r($_POST);
echo "</pre>";

