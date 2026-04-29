const tombol = document.getElementById('toggleMode');
tombol.addEventListener('click', () => {
    const body = document.getElementById('mainBody');
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    tombol.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
} );