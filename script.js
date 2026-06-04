// ==========================
// WEBSITE KECAMATAN KARANGANOM
// ==========================

// Tombol Informasi
function salam() {
    alert("Selamat Datang di Website Resmi Kecamatan Karanganom");
}

// Website berhasil dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Kecamatan Karanganom Berhasil Dimuat");

    tampilkanWaktu();
    setInterval(tampilkanWaktu, 1000);
});

// ==========================
// JAM DAN TANGGAL
// ==========================
function tampilkanWaktu() {
    const sekarang = new Date();

    const jam = String(sekarang.getHours()).padStart(2, "0");
    const menit = String(sekarang.getMinutes()).padStart(2, "0");
    const detik = String(sekarang.getSeconds()).padStart(2, "0");

    const waktu = document.getElementById("jam");
    const tanggal = document.getElementById("tanggal");

    if (waktu) {
        waktu.innerHTML = jam + ":" + menit + ":" + detik;
    }

    if (tanggal) {
        tanggal.innerHTML = sekarang.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
}

// ==========================
// ANIMASI HERO TEXT
// ==========================
window.addEventListener("load", function () {
    const hero = document.querySelector(".hero-text");

    if (hero) {
        hero.style.opacity = "0";

        setTimeout(() => {
            hero.style.transition = "all 1s ease";
            hero.style.opacity = "1";
        }, 300);
    }
});

// ==========================
// TEKS BERGANTI OTOMATIS
// ==========================
const pesan = [
    "Website Resmi Kecamatan Karanganom",
    "Pelayanan Cepat dan Transparan",
    "Bersama Membangun Karanganom Maju"
];

let index = 0;

setInterval(() => {
    const teks = document.querySelector(".hero-text p");

    if (teks) {
        teks.textContent = pesan[index];
        index++;

        if (index >= pesan.length) {
            index = 0;
        }
    }
}, 3000);

// ==========================
// PENGHITUNG KUNJUNGAN
// ==========================
let pengunjung = localStorage.getItem("pengunjung");

if (!pengunjung) {
    pengunjung = 1;
} else {
    pengunjung = parseInt(pengunjung) + 1;
}

localStorage.setItem("pengunjung", pengunjung);

console.log("Jumlah Pengunjung: " + pengunjung);
