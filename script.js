// Klavyeden harfe basılınca ve butona tıklanınca ses oynatma
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Küçük harfler için de büyük harf yap
    playSound(key); // Harfe göre ses çal
});

// Butona tıklandığında ses oynatma
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        const letter = this.innerText[0]; // Buton üzerindeki harfi al
        playSound(letter); // Harfe göre ses çal
    });
});

// Ses oynatma fonksiyonu
function playSound(letter) {
    const audioElement = document.getElementById(`audio${letter}`);
    if (audioElement) {
        audioElement.currentTime = 0; // Sesi baştan çal
        audioElement.play();
    }
}
