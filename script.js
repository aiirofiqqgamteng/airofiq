// ==========================
// WEBSITE KELURAHAN KARANGANOM
// ==========================

// Tombol Informasi
function salam() {
    alert("Selamat Datang di Website Resmi Kelurahan Karanganom");
}

// Website berhasil dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Kelurahan Karanganom Berhasil Dimuat");

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
// HEADER SCROLL
// ==========================
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#006400";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#228B22";
        header.style.boxShadow = "none";
    }
});

// ==========================
// TOMBOL KEMBALI KE ATAS
// ==========================
const tombolAtas = document.createElement("button");

tombolAtas.innerHTML = "↑";
tombolAtas.id = "btnAtas";

document.body.appendChild(tombolAtas);

tombolAtas.style.position = "fixed";
tombolAtas.style.bottom = "20px";
tombolAtas.style.right = "20px";
tombolAtas.style.width = "50px";
tombolAtas.style.height = "50px";
tombolAtas.style.border = "none";
tombolAtas.style.borderRadius = "50%";
tombolAtas.style.background = "#228B22";
tombolAtas.style.color = "white";
tombolAtas.style.fontSize = "22px";
tombolAtas.style.cursor = "pointer";
tombolAtas.style.display = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        tombolAtas.style.display = "block";
    } else {
        tombolAtas.style.display = "none";
    }
});

tombolAtas.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

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
    "Website Resmi Kelurahan Karanganom",
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