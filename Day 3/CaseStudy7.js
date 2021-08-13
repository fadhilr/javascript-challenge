//Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!".

var nama = ["Budi","Adi", "Gunawan", "Joko","Bambang"];
var inputNama = prompt("Masukkan nama siswa = ")
if (cekSiswa(inputNama) == true) {
    alert('Boleh masuk!')
    document.write('Boleh masuk!'+'<br>')
}else{
    alert('Tidak Boleh masuk!')
    document.write('Tidak Boleh masuk!'+'<br>')
}
function cekSiswa(namaS) {
    for (let index = 0; index < nama.length; index++) {
        if (namaS == nama[index]) {
            return true
        }
    }
    return false
}