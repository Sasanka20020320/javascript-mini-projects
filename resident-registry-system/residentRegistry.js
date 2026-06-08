let residents = [
    {
        id: 1,
        name: "Kamal",
        nic: "123"
    },
    {
        id: 2,
        name: "Nimal",
        nic: "456"
    }
];

// Validate resident data
function validateResident(resident) {
    return (
        resident.name.length >= 3 &&
        resident.nic.length >= 3
    );
}

// Add a new resident
function addResident(resident) {
    if(!validateResident(resident)) {
        return false;
    }

    residents.push(resident);
    return true;
}

// Print all residents
function getAllResidents() {
    for(const resident of residents) {
        console.log(`ID: ${resident.id} | ${resident.name}`);
    }
}

// Find a resident by NIC
function findResidentByNIC(nic) {
    return residents.find(resident => resident.nic === nic);
}

// Update a resident's name
function updateResidentName(id, newName) {
    const resident = residents.find(resident => resident.id === id);

    if (!resident) {
        return false;
    }

    resident.name = newName;
    return true;
}

// Delete a resident
function deleteResident(id) {
    const originalLength = residents.length;

    residents = residents.filter(resident => resident.id !== id);

    return residents.length < originalLength;
}

// Print resident count
function getResidentCount() {
    return residents.length;
}

// Generate a report
function generateReport() {
    console.log("===== RESIDENT REPORT =====");
    console.log();

    for(const resident of residents) {
        console.log(`ID: ${resident.id} | ${resident.name}`);
    }

    console.log();
    console.log(`Total Residents: ${getResidentCount()}`);
}

addResident({
    id: 3,
    name: "Sunil",
    nic: "789"
});

getAllResidents();

console.log(findResidentByNIC("456"));

updateResidentName(2, "Nimal Perera");

deleteResident(1);

console.log(getResidentCount());

generateReport();