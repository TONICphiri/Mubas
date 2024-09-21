// Search functionality
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = event.target.querySelector('input').value.toLowerCase();
    const hostels = JSON.parse(localStorage.getItem('hostels')) || [];
    const filteredHostels = hostels.filter(hostel => {
        return hostel.name.toLowerCase().includes(searchTerm) || hostel.location.toLowerCase().includes(searchTerm);
    });

    const hostelContainer = document.getElementById('hostelContainer');
    hostelContainer.innerHTML = ''; // Clear previous results

    if (filteredHostels.length > 0) {
        filteredHostels.forEach(hostel => {
            const hostelDiv = document.createElement('div');
            hostelDiv.classList.add('hostel-listing');
            
            hostelDiv.innerHTML = `
                <img src="${hostel.image}" alt="${hostel.name}" width="200">
                <div class="hostel-info">
                    <h3>${hostel.name}</h3>
                    <p>Location: ${hostel.location}</p>
                    <p>Price: MK ${hostel.price}</p>
                    <p>Distance from School: ${hostel.distance} km</p>
                    <a href="detail.html">View Details</a>
                </div>
            `;
            
            hostelContainer.appendChild(hostelDiv);
        });
    } else {
        hostelContainer.innerHTML = '<p>No hostels found.</p>';
    }
});
