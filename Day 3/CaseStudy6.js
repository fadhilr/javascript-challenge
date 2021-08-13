//Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

var tipeNilai = prompt("Masukkan tipe hasil : ");
var panjang = parseInt(prompt("Masukkan panjang balok : "));
var lebar = parseInt(prompt("Masukkan lebar balok : "));
var tinggi = parseInt(prompt("Masukkan tinggi balok : "));
var hasil = rumusBalok(tipeNilai, panjang, lebar, tinggi);
document.write("Hasil dari rumus " + tipeNilai + " dengan panjang" + panjang + ", lebar" + lebar + ", dan tinggi " + tinggi + "yaitu " + hasil)

function rumusBalok(tipeNilai, panjangB, lebarB, tinggiB) {
    var hasil
    if (tipeNilai == "luas permukaan") {
        hasil = 2 * ((panjangB * lebarB) + (panjangB * tinggiB) + (lebarB * tinggiB))
        return hasil
    } else if (tipeNilai == "volume") {
        hasil = panjangB * lebarB * tinggiB
        return hasil
    } else {
        return "Data yang diinputkan tidak valid"
    }
}