const tombol = document.getElementById('toggleMode');
tombol.addEventListener('click', () => {
    const body = document.getElementById('mainBody');
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    tombol.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
} );

const btnHobi = document.getElementById('btnHobi');
const hobiBox = document.getElementById('boxhobi');
btnHobi.addEventListener('click', () => {
    if (hobiBox.style.display === 'none') {
        hobiBox.style.display = 'block';
        btnHobi.textContent = 'Sembunyikan Hobi';
    } else {
        hobiBox.style.display = 'none';
        btnHobi.textContent = 'Lihat Hobi';
    }
});

const form = document.getElementById('formKontak');
const info = document.getElementById('info');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    if (!nama || !email || !pesan) {
        info.textContent = 'Semua kolom harus diisi!';
        info.style.color = 'red';
        return;
    }
    if (!email.includes('@gmail.com')) {
        info.textContent = 'Email tidak valid!';
        info.style.color = 'red';
        return;
    }
    info.textContent = 'Pesan berhasil dikirim!';
    info.style.color = 'green';
    form.reset();
});