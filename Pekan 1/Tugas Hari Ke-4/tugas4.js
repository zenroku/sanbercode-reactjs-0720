// jawaban soal 1
console.log('===============NO.1===============');
console.log('==================================');
var angka = 1;

console.log('LOOPING PERTAMA');
while (angka <= 20) {
    if (angka % 2 == 0) {
        console.log(`${angka} - I love coding`);
    }
    angka++;
}

console.log('LOOPING KEDUA');
while (angka >= 2) {
    if (angka % 2 == 0) {
        console.log(`${angka} - I love coding`)
    }
    angka--;
}

// jawaban soal 2
console.log('===============NO.2===============');
console.log('==================================');
for (var i = 1; i <= 20; i++) {
    var kata = '';
    if (i % 3 == 0 && i % 2 == 1) {
        kata = 'I Love Coding';
    } else if (i % 2 == 0) {
        kata = 'Berkualitas';
    } else if (i % 2 == 1) {
        kata = 'Santai';
    }
    console.log(`${i} - ${kata}`);
}

// jawaban soal 3
console.log('===============NO.3===============');
console.log('==================================');
var alas = 7;
var tinggi = 7;

for (var i = 1; i < tinggi + 1; i++) {
    for (var j = 1; j < alas + 1; j++) {
        if (i == j) {
            console.log(`${'#'.repeat(j)}`)
            break;
        }
    }
}

// jawaban soal 4
console.log('===============NO.4===============');
console.log('==================================');
var kalimat = "saya sangat senang belajar javascript"

var arrayKalimat = kalimat.split(' ');

console.log(arrayKalimat);

// jawaban soal 5
console.log('===============NO.5===============');
console.log('==================================');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();

for (var i = 0; i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}