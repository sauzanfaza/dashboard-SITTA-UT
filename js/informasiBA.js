const container = document.getElementById('bahanAjarContainer');
const inputSearch = document.getElementById('searchInput')

function tampilkanData(data) {
  container.innerHTML = ""

  if(data.length === 0) {
    container.innerHTML = "<p style='text-align:center'> Data tidak ditemukan.</p>"
    return
  }
  data.forEach(buku => {
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
})
}

tampilkanData(dataBahanajar)

inputSearch.addEventListener("keyup", () => {
  const keyword = this.value.toLowerCase().trim()

  const hasil = dataBahanAjar.filter(
    buku => 
      buku.namaBarang.toLowerCase().includes(keyword) ||
      buku.kodeBarang.toLowerCase().includes(keyword) ||
      buku.jenisBarang.toLowerCase().includes(keyword) ||
      buku.kodeLokasi.toLowerCase().includes(keyword) 
  )
  .sort((a, b) =>
  a.namaBarang.toLowerCase().indexOf(keyword) - b.namaBarang.toLowerCase().indexOf(keyword))

  tampilkanData(hasil)
})

