//waktu sapaan untuk user
const now = new Date()
const hour = now.getHours()

let waktuSapaan 

if(hour >= 5 && hour < 12) {
  waktuSapaan = "Selamat Pagi "
} else if( hour >= 12 && hour < 15){
  waktuSapaan = "Selamat Siang "
} else if( hour >= 15 && hour < 18) {
  waktuSapaan = "Selamat Sore "
} else {
  waktuSapaan = "Selamat Malam "
}

document.querySelector(".waktu").innerHTML = waktuSapaan;

// data tabel
const tableBody = document.querySelector("#bahanAjarTable tbody");

dataBahanAjar.forEach((item, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.kodeLokasi}</td>
    <td>${item.kodeBarang}</td>
    <td>${item.namaBarang}</td>
    <td>${item.jenisBarang}</td>
    <td>${item.edisi}</td>
    <td>${item.stok}</td>
    <td><img src="${item.cover}" alt="${item.namaBarang}" width="50"></td>
  `;
  tableBody.appendChild(row);
});
