// Tentukan waktu target
const targetDate = new Date("December 31, 2024 23:59:59").getTime();

// Update timer setiap detik
const countdown = setInterval(function() {
    // Hitung waktu saat ini
    const now = new Date().getTime();

    // Hitung jarak waktu antara sekarang dan waktu target
    const distance = targetDate - now;

    // Kalkulasi waktu untuk hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil ke elemen HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Jika waktu habis, hentikan timer
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "TIME UP!";
    }
}, 1000);
