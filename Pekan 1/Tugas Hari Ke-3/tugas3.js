// jawaban soal 1

var kataPertama = 'saya';
var kataKedua = 'senang';
var kataKetiga = 'belajar';
var kataKeempat = 'javascript';

var hasil1 = `${kataPertama} ${kataKedua[0].toUpperCase()+kataKedua.slice(1)} ${kataKetiga} ${kataKeempat.toUpperCase()}`

console.log(hasil1);

// jawaban soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

input1 = parseInt(kataPertama);
input2 = parseInt(kataKedua);
input3 = parseInt(kataKetiga);
input4 = parseInt(kataKeempat);

function tambah(input1, input2, input3, input4) {
    return input1 + input2 + input3 + input4;
}

hasil2 = tambah(input1, input2, input3, input4);

console.log(hasil2);

// jawaban soal 3

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// jawaban soal 4

var nilai;

var lanjut = true;

while (lanjut) {
    nilai = parseInt(prompt('masukkan nilai : '));

    if (nilai >= 80) {
        hasil = 'indeksnya A';
    } else if (nilai >= 70 && nilai < 80) {
        hasil = 'indeksnya B';
    } else if (nilai >= 60 && nilai < 70) {
        hasil = 'indeksnya C';
    } else if (nilai >= 50 && nilai < 60) {
        hasil = 'indeksnya D';
    } else if (nilai < 50) {
        hasil = 'indeksnya E';
    }

    alert(hasil);

    lanjut = confirm('input lagi?');

}

alert('terimakasih');

// jawaban soal 5

var tanggal = 30;
var bulan = 8;
var tahun = 1997;

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'November';
        break;
    case 11:
        bulan = 'Desember';
        break;
    case 12:
        bulan = 'Oktober';
        break;
}

console.log(`${tanggal} ${bulan} ${tahun}`);