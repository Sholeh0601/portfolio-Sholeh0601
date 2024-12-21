document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nilai input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi input
    if (!name || !email || !message) {
        alert('Harap lengkapi semua bidang.');
        return;
    }

    // Tampilkan pesan balasan
    const responseElement = document.getElementById('formResponse');
    responseElement.style.display = 'block';
    responseElement.textContent = `Terima kasih, ${name}! Pesan Anda telah terkirim.`;

    // Reset form
    document.getElementById('contactForm').reset();
});
