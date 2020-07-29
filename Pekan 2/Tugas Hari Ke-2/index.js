// di index.js
var readBooks = require('./callback.js')

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]

// Tulis code untuk memanggil function readBooks di sini

jmlBuku = books.length;
index = 0
waktu = 10000;


function jalankan(waktu, index, jmlBuku) {
    readBooks(waktu, books[index], function (siswaWaktu) {
        waktu = siswaWaktu;
        jmlBuku = jmlBuku - 1
        if (jmlBuku > 0) {
            jalankan(waktu, index + 1, jmlBuku);
        }
    })
}

jalankan(waktu, index, jmlBuku);