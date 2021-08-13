/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/

function viewLuas(){
    document.getElementById('viewLuas').style.display='block';
}

function viewKeliling(){
    document.getElementById('viewKeliling').style.display='block';
}

function segiEmpatL() {
    var sisi = parseInt(prompt('Masukkan sisi segi empat = '))
    var hasil = sisi * sisi
    document.getElementById('hasilLuas').innerHTML= 'Hasil luas segi empat adalah = '+hasil
}

function segiPanjangL() {
    var panjang = parseInt(prompt('Masukkan panjang segi panjang = '))
    var lebar = parseInt(prompt('Masukkan lebar segi panjang = '))
    var hasil = panjang * lebar
    document.getElementById('hasilLuas').innerHTML= 'Hasil luas segi panjang adalah = '+hasil
}

function segiTigaL() {
    var alas = parseInt(prompt('Masukkan nilai alas = '))
    var tinggi = parseInt(prompt('Masukkan nilai tinggi = '))
    var hasil = 1/2*alas*tinggi
    document.getElementById('hasilLuas').innerHTML= 'Hasil luas segi tiga adalah = '+hasil
}

function lingkaranL() {
    var jariJari = parseInt(prompt('Masukkan jari-jari lingkaran = '))
    var hasil = (22/7) * jariJari *jariJari
    document.getElementById('hasilLuas').innerHTML= 'Hasil luas lingkaran adalah = '+hasil
}

function segiEmpatK() {
    var sisi = parseInt(prompt('Masukkan panjang segi empat = '))
    var hasil = 4 * sisi
    document.getElementById('hasilKeliling').innerHTML= 'Hasil keliling segi empat adalah = '+hasil
}

function segiPanjangK() {
    var panjang = parseInt(prompt('Masukkan panjang segi panjang = '))
    var lebar = parseInt(prompt('Masukkan lebar segi panjang = '))
    var hasil = (2*panjang) + (2*lebar)
    document.getElementById('hasilKeliling').innerHTML= 'Hasil keliling segi panjang adalah = '+hasil
}

function segiTigaK() {
    var sisi = parseInt(prompt('Masukkan nilai sisi segitiga = '))
    var hasil = 3*sisi
    document.getElementById('hasilKeliling').innerHTML= 'Hasil keliling segi tiga adalah = '+hasil
}

function lingkaranK() {
    var jariJari = parseInt(prompt('Masukkan jari-jari lingkaran = '))
    var hasil = 2 * (22/7) * jariJari
    document.getElementById('hasilKeliling').innerHTML= 'Hasil keliling segi lingkaran adalah = '+hasil
}
/* 

Buatlah sebuah fungsi dengan ketetuan  
1. Jika user menginputkan "mentor" maka mencetak isi array [Akhmad, Alif, Andika, Jojo] 
2. Jika user menginputkan "ta" maka mencetak isi array [Adib, Valen, Vista] 
3. Jika user menginputkan "Admin" maka mencetak isi array [Aura, Cahya]
 */


var input = prompt("Masukkan inputan = ")
var mentor = ["Akhmad", "Alif", "Andika", "Jojo"];
var ta = ["Adib", "Valen", "Vista"];
var admin = ["Aura", "Cahya"];

if (input == "mentor") {
    for (let index = 0; index < mentor.length; index++) {
        document.write(mentor[index]+'<br>')
        
    }
}else if (input == "ta") {
    for (let index = 0; index < ta.length; index++) {
        document.write(ta[index]+'<br>')
    }
}else if (input == "Admin") {
    for (let index = 0; index < admin.length; index++) {
        document.write(admin[index]+'<br>')
    }
}else{
    document.write('Data yang diinputkan tidak ada')
}