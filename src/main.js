const darkModeInput = document.querySelector('#darkMode');

darkModeInput.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
})