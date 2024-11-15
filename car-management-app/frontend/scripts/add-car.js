document.getElementById('add-car-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const tags = document.getElementById('tags').value.split(','); // Convert to array
    const images = document.getElementById('images').value.split(','); // Convert to array

    // Prepare data for API request
    const carData = {
        title,
        description,
        tags,
        images
    };

    try {
        const response = await fetch('http://localhost:5000/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store JWT in localStorage
            },
            body: JSON.stringify(carData)
        });

        const data = await response.json();

        if (response.ok) {
            alert('Car added successfully!');
            window.location.href = 'car-list.html'; // Redirect to the car list page
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to add car. Please try again.');
    }
});
