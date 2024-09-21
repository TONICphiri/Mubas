// home.js
document.addEventListener("DOMContentLoaded", function() {
    const hostelContainer = document.getElementById('hostelContainer');
    const hostels = JSON.parse(localStorage.getItem('hostels')) || [];

    if (hostels.length > 0) {
        hostels.forEach(hostel => {
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
