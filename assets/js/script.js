function toggleTheme() {
    document.body.classList.toggle('dark');

    // change the value button.
    const button = document.getElementById('theme-button');
    button.innerText = document.body.classList.contains('dark')? 'Light' : 'Dark';

}