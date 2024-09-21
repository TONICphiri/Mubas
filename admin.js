// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const hostelForm = document.getElementById('hostelForm');
    const hostelTable = document.getElementById('hostelTable').getElementsByTagName('tbody')[0];
    let editMode = false;
    let editId = null;

    // Load existing hostels from localStorage
    loadHostels();

    hostelForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get form data
        const hostelName = document.getElementById('hostelName').value.trim();
        const location = document.getElementById('location').value.trim();
        const description = document.getElementById('description').value.trim();
        const landlordPhone = document.getElementById('landlordPhone').value.trim();
        const price = document.getElementById('price').value.trim();
        const distance = document.getElementById('distance').value.trim();
        const hostelImageFile = document.getElementById('hostelImage').files[0];

        if (hostelImageFile || editMode) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const hostelImage = hostelImageFile ? e.target.result : null; // Base64 image

                const hostel = {
                    id: editMode ? editId : Date.now(),
                    name: hostelName,
                    location: location,
                    description: description,
                    landlordPhone: landlordPhone,
                    price: price,
                    distance: distance,
                    image: hostelImage ? hostelImage : document.getElementById('hostelImagePreview').src // Keep the existing image if no new image is uploaded
                };

                if (editMode) {
                    updateHostel(hostel);
                } else {
                    saveHostel(hostel);
                    addHostelToTable(hostel);
                }

                // Reset form
                hostelForm.reset();
                editMode = false;
                editId = null;
            };
            if (hostelImageFile) {
                reader.readAsDataURL(hostelImageFile);
            } else {
                reader.onload({ target: { result: null } });
            }
        }
    });

    // Function to save hostel to localStorage
    function saveHostel(hostel) {
        let hostels = JSON.parse(localStorage.getItem('hostels')) || [];
        hostels.push(hostel);
        localStorage.setItem('hostels', JSON.stringify(hostels));

        // Optionally, update the home page with the new hostel
        addHostelToHomePage(hostel);
    }

    // Function to update hostel in localStorage
    function updateHostel(updatedHostel) {
        let hostels = JSON.parse(localStorage.getItem('hostels')) || [];
        hostels = hostels.map(hostel => hostel.id === updatedHostel.id ? updatedHostel : hostel);
        localStorage.setItem('hostels', JSON.stringify(hostels));

        // Reload the table to reflect changes
        reloadTable();
    }

    // Function to load hostels from localStorage
    function loadHostels() {
        let hostels = JSON.parse(localStorage.getItem('hostels')) || [];
        hostels.forEach(hostel => {
            addHostelToTable(hostel);
        });
    }

    // Function to reload the table
    function reloadTable() {
        hostelTable.innerHTML = '';
        loadHostels();
    }

    // Function to add hostel to the table
    function addHostelToTable(hostel) {
        const newRow = hostelTable.insertRow();

        // Image Cell
        const imgCell = newRow.insertCell(0);
        const img = document.createElement('img');
        img.src = hostel.image;
        img.alt = hostel.name;
        img.id = 'hostelImagePreview';
        imgCell.appendChild(img);

        // Name Cell
        const nameCell = newRow.insertCell(1);
        nameCell.textContent = hostel.name;

        // Location Cell
        const locationCell = newRow.insertCell(2);
        locationCell.textContent = hostel.location;

        // Price Cell
        const priceCell = newRow.insertCell(3);
        priceCell.textContent = `${hostel.price} MK`;

        // Phone Number Cell
        const phoneCell = newRow.insertCell(4);
        phoneCell.textContent = hostel.landlordPhone;

        // Distance Cell
        const distanceCell = newRow.insertCell(5);
        distanceCell.textContent = `${hostel.distance} km`;

        // Actions Cell
        const actionsCell = newRow.insertCell(6);
        actionsCell.classList.add('actions');

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = function() {
            editHostel(hostel.id);
        };
        actionsCell.appendChild(editButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            deleteHostel(hostel.id, newRow);
        };
        actionsCell.appendChild(deleteButton);
    }

    // Function to edit hostel
    function editHostel(id) {
        let hostels = JSON.parse(localStorage.getItem('hostels')) || [];
        const hostel = hostels.find(h => h.id === id);
        if (hostel) {
            // Populate form with hostel data
            document.getElementById('hostelName').value = hostel.name;
            document.getElementById('location').value = hostel.location;
            document.getElementById('description').value = hostel.description;
            document.getElementById('landlordPhone').value = hostel.landlordPhone;
            document.getElementById('price').value = hostel.price;
            document.getElementById('distance').value = hostel.distance;

            // Show existing image if available
            if (hostel.image) {
                const imgPreview = document.getElementById('hostelImagePreview');
                imgPreview.src = hostel.image;
            }

            // Set edit mode
            editMode = true;
            editId = hostel.id;
        }
    }

    // Function to delete hostel
    function deleteHostel(id, row) {
        let hostels = JSON.parse(localStorage.getItem('hostels')) || [];
        hostels = hostels.filter(h => h.id !== id);
        localStorage.setItem('hostels', JSON.stringify(hostels));

        // Remove row from table
        hostelTable.removeChild(row);

        // Optionally, remove from home page
        removeHostelFromHomePage(id);
    }

    // Function to add hostel to home page (Assuming home page has a specific section)
    function addHostelToHomePage(hostel) {
        // This function should communicate with the home page to update the hostel list.
        // Implementation depends on how the home page is structured.
        // For example, if the home page fetches from localStorage or a database, no action is needed.
        // Otherwise, consider using server-side scripts to manage data.
    }

    // Function to remove hostel from home page
    function removeHostelFromHomePage(id) {
        // Similar to addHostelToHomePage, implement based on your home page structure.
    }
});
