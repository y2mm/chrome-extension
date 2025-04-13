console.log("This is a popup!") //console log to test

fetch('http://127.0.0.1:5000/run-python-script', {  // flask data request
  method: 'POST'
})
  .then(response => response.json())
  .then(data => {
    document.getElementById('output').textContent = data.output;  })    // making flask data into an id element to display in html file
  .catch(error => console.error('Fetch error:', error));