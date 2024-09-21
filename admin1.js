// admin.js
document.getElementById("hostelForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather the hostel data from the form
    const hostelName = document.getElementById("hostelName").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const landlordPhone = document.getElementById("landlordPhone").value;
    const price = document.getElementById("price").value;
    const distance = document.getElementById("distance").value;
    const hostelImage = document.getElementById("hostelImage").files[0];

    if (hostelImage) {
        const reader = new FileReader();

        // When the image is read, save the data to localStorage
        reader.onload = function(e) {
            const hostelData = {
                name: hostelName,
                location: location,
                description: description,
                phone: landlordPhone,
                price: price,
                distance: distance,
                image: e.target.result // Image URL
            };

            // Get existing hostels from localStorage or initialize an empty array
            let hostels = JSON.parse(localStorage.getItem('hostels')) || [];
            hostels.push(hostelData);

            // Save the updated hostels back to localStorage
            localStorage.setItem('hostels', JSON.stringify(hostels));

            // Clear the form
            document.getElementById("hostelForm").reset();
            alert("Hostel added successfully!");
        };

        // Read the image file as a data URL
        reader.readAsDataURL(hostelImage);
    } else {
        alert("Please upload a hostel image.");
    }
});
