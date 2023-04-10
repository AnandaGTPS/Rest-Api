const imageFolder = "../gambar/meme/images/"; // Ganti dengan nama folder tempat menyimpan gambar
const images = []; // Variabel array kosong untuk menyimpan nama-nama file gambar

// Fungsi untuk memuat semua file gambar dari folder
function preloadImages() {
    for (let i = 1; i <= 63; i++) { // Ganti dengan jumlah file gambar yang ada
        images.push(imageFolder + "gambar-" + i + ".png"); // Sesuaikan dengan format nama file gambar Anda
    }
}

// Fungsi untuk memilih gambar secara acak dari array images
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    return randomImage;
}

// Fungsi untuk menampilkan gambar pada halaman web
function displayRandomImage() {
    const img = document.createElement("img");
    img.src = getRandomImage();
    document.getElementById("random-image").appendChild(img);
}

// Panggil fungsi preloadImages untuk memuat semua file gambar dari folder
preloadImages();

// Panggil fungsi displayRandomImage untuk menampilkan gambar secara acak pada halaman web
displayRandomImage();
