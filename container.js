document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected hostel details from localStorage
    const hostelDetails = JSON.parse(localStorage.getItem('selectedHostel'));

    if (hostelDetails) {
        const detailsSection = document.getElementById('hostelDetails');
        detailsSection.innerHTML = `
            <img src="${hostelDetails.image}" alt="${hostelDetails.name}" width="300">
            <h2>${hostelDetails.name}</h2>
            <p>Location: ${hostelDetails.location}</p>
            <p>Description: ${hostelDetails.description}</p>
            <p>Price: MK ${hostelDetails.price}</p>
            <p>Distance from School: ${hostelDetails.distance} km</p>
            <p>Landlord: ${hostelDetails.landlordName}</p>
            <p>Contact: ${hostelDetails.phone} | ${hostelDetails.landlordEmail}</p>
        `;
    } else {
        document.getElementById('hostelDetails').innerHTML = '<p>Hostel details not available.</p>';
    }
});
