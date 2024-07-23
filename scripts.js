document.addEventListener('DOMContentLoaded', function() {
    // Example JavaScript to handle form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('home-text.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('home-text').innerText = text;
        })
        .catch(error => {
            console.error('Error fetching the home-text.txt file:', error);
            document.getElementById('home-text').innerText = 'Error loading content.';
        });
});
