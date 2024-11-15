// Fetch and display the list of cars
async function loadCars() {
    const carListElement = document.querySelector('.car-list');
    const token = localStorage.getItem('token'); // Assuming JWT is stored in localStorage

    if (!token) {
        alert('Please log in to view cars.');
        window.location.href = 'login.html'; // Redirect to login page if not logged in
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/cars', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const cars = await response.json();

        if (response.ok) {
            carListElement.innerHTML = ''; // Clear previous list
            cars.forEach(car => {
                const carElement = document.createElement('div');
                carElement.classList.add('car-item');
                carElement.innerHTML = `
                    <h3>${car.title}</h3>
                    <p>${car.description}</p>
                    <p><strong>Tags:</strong> ${car.tags.join(', ')}</p>
                    <a href="car-detail.html?id=${car._id}" class="view-details">View Details</a>
                `;
                carListElement.appendChild(carElement);
            });
        } else {
            carListElement.innerHTML = `<p>No cars found.</p>`;
        }
    } catch (error) {
        console.error('Error fetching cars:', error);
        alert('Failed to load cars. Please try again later.');
    }
}

// Search function to filter cars dynamically
function searchCars() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const carItems = document.querySelectorAll('.car-item');

    carItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        const tags = item.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput) || tags.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Load the cars when the page is loaded
window.onload = loadCars;
