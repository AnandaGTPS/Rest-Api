const greeting = document.getElementById("greeting");
const time = new Date().getHours();
let message;

if (time >= 0 && time < 12) {
  message = "Selamat Pagi";
} else if (time >= 12 && time < 15) {
  message = "Selamat Siang";
} else if (time >= 15 && time < 18) {
  message = "Selamat Sore";
} else {
  message = "Selamat Malam";
}

greeting.textContent = message;
