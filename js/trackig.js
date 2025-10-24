document.getElementById("btnCari").addEventListener("click", function() {
  const inputDO = document.getElementById("nomorDO").value.trim();
  const hasilDiv = document.getElementById("hasilTracking");
  hasilDiv.innerHTML = "";

  if (!inputDO) {
    alert("Nomor DO tidak boleh kosong!");
    return;
  }

  const data = dataTracking[inputDO];

  if (!data) {
    hasilDiv.innerHTML = `<p style="color:red;">Nomor DO tidak ditemukan.</p>`;
    return;
  }

  // buat tampilan detail tracking
  let html = `
    <h3>Detail Pengiriman</h3>
    <p><strong>Nama Penerima:</strong> ${data.nama}</p>
    <p><strong>Status:</strong> ${data.status}</p>
    <p><strong>Ekspedisi:</strong> ${data.ekspedisi}</p>
    <p><strong>Tanggal Kirim:</strong> ${data.tanggalKirim}</p>
    <p><strong>Paket:</strong> ${data.paket}</p>
    <p><strong>Total:</strong> ${data.total}</p>

    <h4>Riwayat Perjalanan:</h4>
    <ul class="tracking-list">
  `;

  data.perjalanan.forEach(item => {
    html += `<li><strong>${item.waktu}</strong> - ${item.keterangan}</li>`;
  });

  html += `</ul>`;
  hasilDiv.innerHTML = html;
});
