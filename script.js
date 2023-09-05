document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    var url = 'https://localhost:8080/?name=' + name + '&year=' + year;
    document.getElementById('url').textContent = url;
});