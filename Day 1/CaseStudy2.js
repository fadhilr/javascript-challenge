function nilaiPeserta(nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
    switch (true) {
        case nilai >= 80:
            if (nilai>100) {
                document.write('Nilai melewati score maksimal'+'<br>')
            } else {
                document.write('Nilai anda  = A'+'<br>')
            }
            break;
        case nilai >= 60:
            document.write('Nilai anda  = B'+'<br>')
            break;
        case nilai >= 40:
            document.write('Nilai anda  = C'+'<br>')
            break;
        case nilai >= 20:
            document.write('Nilai anda  = D'+'<br>')
            break;
        default:
            document.write('Nilai anda  = E'+'<br>')
            break;
    }
}
var nilai = parseInt(prompt('Masukkan nilai siswa = '));
nilaiPeserta(nilai);

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/