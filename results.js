const goHome = document.getElementById('go-home');

goHome.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
    window.location.href = './index.html';
    console.log("hello");
});