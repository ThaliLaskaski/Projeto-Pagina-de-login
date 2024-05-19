const changebgButton = document.getElementById('changebg');
const container = document.querySelector('.container');
const bgIcon = document.querySelector('#changebg img');

changebgButton.addEventListener('click', function() {
    container.classList.toggle('bg-day');
    bgIcon.src = container.classList.contains('bg-day') ? './public/images/icon-2.png' : './public/images/icon-1.png';
    bgIcon.classList.toggle('icon-2', container.classList.contains('bg-day'));
});
