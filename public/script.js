document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const school = document.getElementById('school').value;

    fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, age, school })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Student added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error adding student.');
    });
});