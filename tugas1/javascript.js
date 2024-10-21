let nilaiAwal = parseInt(prompt("Masukkan nilai awal:"));
let nilaiAkhir = parseInt(prompt("Masukkan nilai akhir:"));

let hasil = "";

for (let i = nilaiAwal; i <= nilaiAkhir; i++) {
  hasil += i + " ";  
}

alert(hasil.trim());
