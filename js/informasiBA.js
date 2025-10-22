const container = document.getElementById('bahanAjarContainer');

dataBahanAjar.forEach(buku => {
  const card = document.createElement('div');
  card.className = 'card';

  const info = document.createElement('div');
  info.className = 'info';
  info.innerHTML = `
    <h2>${buku.namaBarang}</h2>
    <p><strong>Kode Lokasi:</strong> ${buku.kodeLokasi}</p>
    <p><strong>Kode Barang:</strong> ${buku.kodeBarang}</p>
    <p><strong>Jenis:</strong> ${buku.jenisBarang}</p>
    <p><strong>Edisi:</strong> ${buku.edisi}</p>
    <p><strong>Stok:</strong> ${buku.stok}</p>
  `;

  const cover = document.createElement('img');
  cover.className = 'cover';
  cover.src = buku.cover;
  cover.alt = buku.namaBarang;

  card.appendChild(info);
  card.appendChild(cover);
  container.appendChild(card);
});
