function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in both name and email fields.');
        return; 
    }

    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/submit', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Form submission failed. Please try again.');
        }
    };

    xhr.send(formData);
}
