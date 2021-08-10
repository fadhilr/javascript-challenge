function nilaiPeserta(nilai) {
    switch (true) {
        case nilai >= 80:
            if (nilai > 100) {
                return 'Nilai melebihi maksimum score'
            } else {
                return 'A'
            }
            break;
        case nilai >= 60:
            return 'B'
            break;
        case nilai >= 40:
            return 'C'
            break;
        case nilai >= 20:
            return 'D'
            break;
        default:
            return 'E'
            break;
    }
}
var nilai = 22;
var dataSiswa = [
    ["Jojo", 55.5],
    ["Andika", 70.1],
    ["Alif", 19],
    ["Vista", 102]
];
//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
for (let index = 0; index < dataSiswa.length; index++) {
    var nilai = dataSiswa[index][1];
    var grade = nilaiPeserta(nilai);
    var nama = dataSiswa[index][0];
    document.write('Nilai yang didapatkan kak ' + nama + ' yaitu = ' + nilai + '. Dengan grade ' + grade + '<br>');
}