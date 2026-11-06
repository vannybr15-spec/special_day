// 1. Pindah Halaman/Seksi
function goToSection(sectionId) {
    // Sembunyikan semua seksi
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
        sec.classList.add('hidden');
    });

    // Tampilkan seksi yang dituju
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');

    // Autoplay Musik saat interaksi pertama
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play().catch(() => {});
    }

    // Jalankan efek ketik saat masuk ke seksi pesan
    if (sectionId === 'sec-letter-body') {
        startTyping();
    }
}

// 2. Countdown Timer
function updateCountdown() {
    // Set tanggal ulang tahun ke tanggal 23 November 2026 jam 00:00:00
    // Bulan di JavaScript dimulai dari 0 (Januari = 0, Februari = 1, ..., November = 10)
    const targetDate = new Date(2026, 10, 23, 0, 0, 0); 
    const now = new Date();
    const diff = targetDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 3. Efek Teks Ketik Otomatis (Typewriter Effect)
const letterMessage = `Selamat bertambah usia sayang. Semoga di umurmu yang baru \nini, Allah selalu menjagamu dimanapun kamu berada. Aku berharap semua hal baik yang sedang kamu usahakan satu per satu akan menemukan jalannya. Semoga kariermu semakin baik, langkahmu selalu dimudahkan, rezekimu dilapangkan, dan semoga dimanapun kamu berada dikelilingi orang-orang yang baik.\n\nAku tau perjalananmu tidak selalu mudah. Ada banyak hal yang harus kamu hadapi, pelajari, dan perbaiki. Jadi, tolong jangan terlalu keras dengan diri sendiri ya. Kamu ngga harus selalu kuat setiap saat.Kamu punya aku, kamu bisa cerita apapun ke aku kapanpun kamu butuh, aku ada buat kamu. Aku senang jika ikut dilibatkan di hidupmu,apapun kondisinya aku usahakan tetap disini. \n\nTerima kasih sudah menjadi laki-laki yang kuat sejauh ini. \nAku bangga sekali dengan semua perjuangan dan pencapaianmu. Aku akan selalu berharap yang terbaik untukmu. \nSemoga kamu tumbuh menjadi laki-laki yang semakin dewasa dan bertanggung jawab. \n\nJaga kesehatan, tolong untuk kurangi rokoknya demi dirimu sendiri dan orang sekitarmu. Tetap jadi orang yang punya hati baik dimanapun kamu berada ya. \n\nSekali lagi, selamat ulang tahun💕`;
let typeIndex = 0;
let isTypingStarted = false;

function startTyping() {
    if (isTypingStarted) return;
    isTypingStarted = true;
    
    const element = document.getElementById('typedText');
    element.innerHTML = "";
    
    function typeChar() {
        if (typeIndex < letterMessage.length) {
            let char = letterMessage.charAt(typeIndex);
            if (char === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += char;
            }
            typeIndex++;
            setTimeout(typeChar, 40);
        } else {
            // Tampilkan tombol memori setelah selesai mengetik
            document.getElementById('btnMemories').classList.remove('hidden-btn');
        }
    }
    typeChar();
}

// 4. Bunga Api / Animasi Hati Melayang
function createHeart() {
    const container = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);