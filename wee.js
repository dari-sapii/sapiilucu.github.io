var musik = "happy.mp3";

// Buat elemen audio
var audio = document.createElement("audio");
audio.src = musik;
audio.autoplay = true;
audio.loop = true;
audio.style.display = "none"; // tersembunyi
document.body.appendChild(audio);

// Handle autoplay di browser
document.addEventListener('click', function () {
    audio.play().catch(() => console.log('Autoplay.'));
}, { once: true });
