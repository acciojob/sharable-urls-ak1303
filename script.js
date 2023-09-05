// your code here
document.getElementById('myForm').addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get user input values
            var name = document.getElementById('name').value;
            var year = document.getElementById('year').value;

            // Build the query string
            var queryString = 'name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);

            // Update the URL in the h3 element
            document.getElementById('url').textContent = 'https://localhost:8080/?' + queryString;
        });