// Function to open modal
function openModal(destination, promo) {
    // Populate modal with destination and promo
    document.getElementById('destination-modal').innerText = destination;
    document.getElementById('promo-details').innerText = promo;
    // Show modal
    document.getElementById('modal').classList.remove('hidden');
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Function to confirm order in modal
function confirmOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (name && email && paymentMethod) {
        alert(`Pesanan berhasil:\nNama: ${name}\nEmail: ${email}\nMetode Pembayaran: ${paymentMethod}`);
        closeModal(); // Close modal after confirmation
    } else {
        alert('Harap isi semua field!');
    }
}
