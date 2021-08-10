/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/
var tinggi = parseInt(prompt('Masukkan tinggi badan yang ingin dicek (CM)= '))
var beratPria = beratBadanPria(tinggi)
var beratWanita = beratBadanWanita(tinggi)
cetak()

function beratBadanPria(tinggiPria) {
    var hasil = (tinggiPria - 100) - ((tinggiPria - 100) * (10 / 100));
    return hasil;
}

function beratBadanWanita(tinggiWanita) {
    var hasil = (tinggiWanita - 100) - ((tinggiWanita - 100) * (15 / 100));
    return hasil;
}

function cetak() {
    document.write('Berat badan ideal pria untuk tinggi ' + tinggi + ' sentimeter adalah ' + beratPria + ' kilogram')
    document.write('<br>')
    document.write('Berat badan ideal wanita untuk tinggi ' + tinggi + ' sentimeter adalah ' + beratWanita + ' kilogram')
    document.write('<br>')
}