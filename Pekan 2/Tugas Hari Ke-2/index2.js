var readBooksPromise = require('./promise.js')

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
    }
]

// Lanjutkan code untuk menjalankan function readBooksPromise

waktu = 10000;
index = 0;
totalBuku = books.length;

function jalankan(waktu, index, totalBuku) {
    readBooksPromise(waktu, books[index])
        .then(function (waktuSisa) {
            waktu = waktuSisa;
            totalBuku = totalBuku - 1
            if (waktuSisa > 0) {
                jalankan(waktu, index + 1, totalBuku);
            }
        })
        .catch(function (error) {

        })

}

jalankan(waktu, index, totalBuku);