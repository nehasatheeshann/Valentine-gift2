// --- 1. TIMER (Update Date!) ---
const startDate = new Date("2025-09-17"); 
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").innerText = Math.floor((diff / 1000 / 60) % 60);
    document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}
setInterval(updateTimer, 1000);

// --- 2. SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
});
document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => observer.observe(el));

// --- 3. OPEN LETTERS ---
function openLetter(id) {
    document.getElementById(id).classList.remove('hidden');
}
function closeLetter(id) {
    document.getElementById(id).classList.add('hidden');
}

// --- 4. LOCK (Update Passcode!) ---
const correctDate = "10/08/2007"; 
document.getElementById('unlock-btn').addEventListener('click', function() {
    if (document.getElementById('secret-code').value.trim() === correctDate) {
        document.getElementById('future-lock').style.display = 'none';
        document.getElementById('future-content').classList.remove('hidden');
        document.getElementById('future-content').classList.add('is-visible');
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
});

// --- 5. POPUPS & CONFETTI (FIXED Z-INDEX) ---
document.getElementById('reveal-btn').addEventListener('click', () => document.getElementById('popup-1').classList.remove('hidden'));
document.getElementById('excited-yes').addEventListener('click', () => { 
    document.getElementById('popup-1').classList.add('hidden'); 
    document.getElementById('popup-2').classList.remove('hidden'); 
});

document.getElementById('love-yes').addEventListener('click', function() {
    document.getElementById('popup-2').classList.add('hidden');
    document.getElementById('final-surprise').classList.remove('hidden');
    
    // --- CONFETTI SETTINGS ---
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    // zIndex: 10001 ensures it sits ON TOP of the popup
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
});

document.getElementById('love-no').addEventListener('click', () => alert("Wrong answer! 😤"));
const widget = document.getElementById('music-widget');
const music = document.getElementById('bg-music');
const icon = document.getElementById('music-icon');

widget.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        widget.classList.add('is-playing');
        // You can change the icon to a music note when playing
        icon.innerText = "🎵"; 
    } else {
        music.pause();
        widget.classList.remove('is-playing');
        icon.innerText = "❤️";
    }
});
const phrases = [
    { german: "Ich liebe dich", english: "I love you ❤️" },
    { german: "Du bist mein Schatz", english: "You are my treasure 💎" },
    { german: "Meine Liebe für dich ist ewig", english: "My love for you is eternal ♾️" },
    { german: "Ich bin so glücklich mit dir", english: "I am so happy with you 🫠" },
    { german: "Du bist meine Welt", english: "You are my world 🌍" },
    { german: "Für immer und ewig", english: "For ever and always ✨" }
];

function showGermanPhrase() {
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById('german-phrase').innerText = random.german;
    document.getElementById('german-translation').innerText = random.english;
    document.getElementById('german-modal').classList.remove('hidden');
}

function closeGermanModal() {
    document.getElementById('german-modal').classList.add('hidden');
}