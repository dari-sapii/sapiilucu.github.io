onload = () => {
    document.body.classList.remove("container");
  };
  document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5; // Atur volume kalau mau
    audio.play().catch(() => {
        console.log("Autoplay diblokir, butuh interaksi user.");
    });
});