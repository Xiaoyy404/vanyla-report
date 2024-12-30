document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Mendapatkan data dari form
  const pesan = document.getElementById('message').value;

  // Token dan chat ID Telegram
  const token = '7601211995:AAGILXl4f9jTlqqOYOcFxxU0WjnejI1vKeM';
  const chatId = '7065763951';

  // Pesan yang akan dikirim
  const message = `*Pemberitahuan Baru*\n\n*Pesan:* ${pesan}`;

  // URL API Telegram
  const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage`;

  // Mengirim permintaan ke API Telegram
  fetch(telegramAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Pesan berhasil dikirim!');
        document.getElementById('form').reset(); // Reset form setelah sukses
      } else {
        alert('Gagal mengirim pesan. Coba lagi.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim pesan.');
    });
});