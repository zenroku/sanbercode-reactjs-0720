// jawbaan soal no 1
let luasLingkaran = jari => console.log(`Luas Lingkaran = ${3.14 * jari * jari}`);
const kelilingLingkaran = jari => console.log(`Keliling Lingkaran = ${2 * 3.14 * jari}`);

luasLingkaran(5);
kelilingLingkaran(5);

// jawaban soal no 2

// versi saya
let kalimat = "";
let isiKalimat = ['saya', 'adalah', 'seorang', 'frontend', 'developer'];

const tambahKalimat = (arrKalimat, target) => target = `${arrKalimat.join(' ')}`;
console.log(tambahKalimat(isiKalimat, kalimat));

// versi manual template literals

const tambahKalimat2 = (arrKalimat, target) => target = `${arrKalimat[0]} ${arrKalimat[1]} ${arrKalimat[2]} ${arrKalimat[3]} ${arrKalimat[4]}`;
console.log(tambahKalimat2(isiKalimat, kalimat));

// jawaban soal no 3

class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }

    cetakInfoBuku() {
        console.log(`\nNama Buku : ${this.name}\nTotal Halaman : ${this.totalPage}\nHarga : ${this.price}`);
    }
}

class Komik extends Book {
    constructor(name, totalPage, price, isColorful = false) {
        super(name, totalPage, price);
        this.isColorful = isColorful;
    }

    cetakInfoBuku() {
        let berwarna = '';
        if (this.isColorful == false) {
            berwarna = 'Tidak Berwarna'
        } else {
            berwarna = 'Ya'
        }
        console.log(`\nNama Komik : ${this.name}\nTotal Halaman : ${this.totalPage}\nHarga : ${this.price}\nBerwarna : ${berwarna}`);
    }
}

let buku1 = new Book('Belajar React Js', 150, 120000);
let komik1 = new Komik('Kanojo Okarishimasu', 25, 15000);
let komik2 = new Komik('Kimetsu no Yaiba', 40, 25000, true);
buku1.cetakInfoBuku();
komik1.cetakInfoBuku();
komik2.cetakInfoBuku();