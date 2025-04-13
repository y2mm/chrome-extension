console.log("This is a popup!") //console log to test

fetch('http://127.0.0.1:5000/run-python-script', {  // flask data request
  method: 'GET'
})
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    document.getElementById('output').textContent = data.output;  })    // making flask data into an id element to display in html file
  .catch(error => console.error('Fetch error:', error));

fetch('http://127.0.0.1:5000/random-generator', {  // flask data request
  method: 'GET'
})
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
      console.log('random-generator response:', data); // 🔍 log full response from Flask
    document.getElementById('random').textContent = data.random;  })    // making flask data into an id element to display in html file
  .catch(error => console.error('Fetch error:', error));
