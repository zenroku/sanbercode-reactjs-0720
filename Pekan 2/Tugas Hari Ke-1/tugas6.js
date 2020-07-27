// jawaban soal no 1
var objectDataPeserta = {
    "nama": "Asep",
    "jenis kelamin": "laki-laki",
    "hobi": "baca buku",
    "tahun lahir": 1992
};

console.log(objectDataPeserta);

// jawaban soal no 2
var arrayOfObject = [{
        "nama": "strawberry",
        "warna": "merah",
        "ada bijinya": "tidak",
        "harga": 9000
    },
    {
        "nama": "jeruk",
        "warna": "oranye",
        "ada bijinya": "ada",
        "harga": 8000
    },
    {
        "nama": "Semangka",
        "warna": "Hijau & Merah",
        "ada bijinya": "ada",
        "harga": 10000
    },
    {
        "nama": "Pisang",
        "warna": "Kuning",
        "ada bijinya": "tidak",
        "harga": 5000
    }
]

console.log(arrayOfObject[0]);


// jawaban soal no 3
var dataFilm = [];

function tambahDataFilm(nama, durasi, genre, tahun) {
    data = {
        "nama": nama,
        "durasi": durasi,
        "genre": genre,
        "tahun": tahun
    };
    dataFilm.push(data);
    return dataFilm;
}

tambahDataFilm('joker', '2 jam', 'psychological', 2019);
console.log(dataFilm);

// jawaban soal no 4

// release 0

class Animal {

    constructor(name, legs = 4, cold_blooded = false) {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// release 1

class Ape extends Animal {
    constructor(name, legs = 2, cold_blooded = false) {
        super(name, legs, cold_blooded);
    }

    yell() {
        return console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

class Frog extends Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        super(name, legs, cold_blooded);
    }

    jump() {
        return console.log("hop hop");
    }
}

var kodok = new Frog("buduk");
kodok.jump();

// jawaban soal no 5

class Clock {

    constructor(template) {
        this.template = template
    }

    timer;

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop = function () {
        clearInterval(timer);
    };

    start = function () {
        render = render();
        timer = setInterval(render, 1000);
    };

}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();