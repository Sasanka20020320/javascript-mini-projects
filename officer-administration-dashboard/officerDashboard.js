let residents = [
    { id: 1, name: "Kamal" },
    { id: 2, name: "Nimal" },
    { id: 3, name: "Sunil" }
];

let requests = [
    { id: 1, residentId: 1, status: "Pending" },
    { id: 2, residentId: 2, status: "Approved" },
    { id: 3, residentId: 3, status: "Rejected" }
];

let appointments = [
    { id: 1, residentId: 1, status: "Booked" },
    { id: 2, residentId: 2, status: "Completed" }
];

let users = [
    { id: 1, role: "resident" },
    { id: 2, role: "officer" },
    { id: 3, role: "admin" }
];

// Output residents count
function getTotalResidents() {
    return residents.length;
}

// Output requests count
function getTotalRequests() {
    return requests.length;
}

// Output appointments count
function getTotalAppointments() {
    return appointments.length;
}

// Output users count
function getTotalUsers() {
    return users.length;
}

function getRequestStatistics() {
    const requestStats = requests.reduce((acc, request) => {
        const status = request.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});

    return requestStats;
}

// Output Appointment Statistics
function getAppointmentStatistics() {
    const appointmentStats = appointments.reduce((acc, appointment) => {
        const status = appointment.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});

    return appointmentStats;
}

// Output Role Statistics
function getRoleStatistics() {
    const roleStats = users.reduce((acc, user) => {
        const role = user.role;
        acc[role] = (acc[role] || 0) + 1;
        return acc;
    }, {});

    return roleStats;
}

// Find resident's requests
function findResidentRequests(residentId) {
    return requests.filter(request => request.residentId === residentId);
}

// Find resident's appointments
function findResidentAppointments(residentId) {
    return appointments.filter(appointment => appointment.residentId === residentId);
}

// Generate system dashboard
function generateSystemDashboard() {
    console.log("===== GN ADMINISTRATION DASHBOARD =====");
    console.log();

    console.log(`Residents: ${getTotalResidents()}`);
    console.log(`Requests: ${getTotalRequests()}`);
    console.log(`Appointments: ${getTotalAppointments()}`);
    console.log(`Users: ${getTotalUsers()}`);
    console.log();

    console.log("Request Statistics");
    console.log(Object.entries(getRequestStatistics()).map(([key, value]) => `${key}: ${value}`).join("\n"));
    console.log();

    console.log("Appointment Statistics");
    console.log(Object.entries(getAppointmentStatistics()).map(([key, value]) => `${key}: ${value}`).join("\n"));
    console.log();

    console.log("Role Statistics");
    console.log(Object.entries(getRoleStatistics()).map(([key, value]) => `${key}: ${value}`).join("\n"));
}

// Print resident summary
function getResidentSummary(residentId) {
    const resident = residents.find(resident => resident.id === residentId);
    if (!resident) {
        return null;
    }

    const residentRequests = requests.filter(request => request.residentId === residentId);

    const residentAppointments = appointments.filter(appointment => appointment.residentId === residentId);
    
    return {
        resident,
        requests: residentRequests,
        appointments: residentAppointments
    };
}

generateSystemDashboard();

console.log(findResidentRequests(1));
console.log(findResidentAppointments(2));

console.log(getResidentSummary(1));