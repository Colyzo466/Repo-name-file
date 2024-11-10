document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const school = document.getElementById('school').value;

    fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, age, school }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = `Welcome, ${data.name} ${data.surname}!`;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Error logging in. Please try again.';
    });
});