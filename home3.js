// Assuming the hostels are stored in localStorage
const hostels = JSON.parse(localStorage.getItem('hostels')) || [];

// Function to display the list of hostels after a search
function displayHostels(filteredHostels) {
    const hostelListContainer = document.getElementById('hostelList');
    hostelListContainer.innerHTML = '';  // Clear previous list

    filteredHostels.forEach((hostel, index) => {
        const hostelItem = `
            <div class="hostel-item">
                <img src="${hostel.image}" alt="${hostel.name}" width="200">
                <h3>${hostel.name}</h3>
                <p>Location: ${hostel.location}</p>
                <p>Price: MK ${hostel.price}</p>
                <button onclick="viewHostel(${index})">View</button>
            </div>
        `;
        hostelListContainer.innerHTML += hostelItem;
    });
}

// Function to handle the search input and filter hostels
function searchHostels() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filteredHostels = hostels.filter(hostel =>
        hostel.name.toLowerCase().includes(searchQuery) || hostel.location.toLowerCase().includes(searchQuery)
    );
    
    displayHostels(filteredHostels);
}

// Function to handle "View" button click
function viewHostel(index) {
    const selectedHostel = hostels[index];
    
    // Store the selected hostel details in localStorage
    localStorage.setItem('selectedHostel', JSON.stringify(selectedHostel));

    // Redirect to the hostel details page (container.html)
    window.location.href = 'container.html';
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', searchHostels);

// Initial display of all hostels (before search)
displayHostels(hostels);
