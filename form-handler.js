document.getElementById('join-us-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var formDataObj = {};
    formData.forEach((value, key) => formDataObj[key] = value);

    fetch('YOUR_WEB_APP_URL', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formDataObj)
    })
    .then(response => response.text())
    .then(text => {
        if (text === 'Success') {
            alert('Your submission has been received!');
            event.target.reset();  // Reset the form after successful submission
        } else {
            alert('There was an error with your submission. Please try again.');
        }
    })
    .catch(error => alert('There was an error: ' + error.message));
});
