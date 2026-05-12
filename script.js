// Sayfa yüklendiğinde konsola mesaj yazdır
document.addEventListener('DOMContentLoaded', () => {
    console.log("Emir Yakut Portfolyo Sitesi Hazır!");
});

// Başlığa tıklandığında renk değiştiren ufak bir etkileşim
const mainTitle = document.getElementById('main-title');

mainTitle.addEventListener('click', () => {
    mainTitle.style.color = (mainTitle.style.color === 'white') ? '#00adb5' : 'white';
});