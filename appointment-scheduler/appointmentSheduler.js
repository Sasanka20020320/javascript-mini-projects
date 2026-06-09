let appointments = [
    {
        id: 1,
        residentName: "Kamal",
        date: "2026-08-10",
        status: "Booked"
    }
];

function validateAppointment(appointment) {
    return(
        appointment.residentName?.length > 0 &&
        appointment.date &&
        ["Booked", "Completed", "Cancelled"].includes(appointment.status)
    );
}

function createAppointment(appointment) {
    if(!validateAppointment(appointment)) {
        return false;
    }
    
    for(const appoint of appointments) {
        if(appoint.date === appointment.date) {
            return false;
        }
    }
    appointments.push(appointment);
    return true;
}

function getAllAppointments() {
    for(const appointment of appointments) {
        console.log(`ID: ${appointment.id} | ${appointment.residentName} | ${appointment.date} | ${appointment.status}`);
    }
}

function findAppointmentById(id) {
    return appointments.find(appointment => appointment.id === id);
}

function completeAppointment(id) {
    const appointment = appointments.find(appointment => appointment.id === id);
    
    if(!appointment) {
        return false;
    }
    if(appointment.status !== "Booked") {
        return false;
    }
    appointment.status = "Completed";
    return true;
}

function cancelAppointment(id) {
    const appointment = appointments.find(appointment => appointment.id === id);

    if(!appointment) {
        return false;
    }
    if(appointment.status !== "Booked") {
        return false;
    }
    appointment.status = "Cancelled";
    return true;
}

function getAppointmentsByStatus(status) {
    return appointments.filter(appointment => appointment.status === status);
}

function generateAppointmentDashboard() {
    const appointmentCounts = appointments.reduce((acc, appointment) => {
        const status = appointment.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});

    console.log("===== APPOINTMENT DASHBOARD =====");

    console.log(Object.entries(appointmentCounts).map(([key, value]) => `${key}: ${value}`).join("\n"));

    console.log(`Total Appointments: ${appointments.length}`);
}

createAppointment({
    id: 2,
    residentName: "Nimal",
    date: "2026-08-10",
    status: "Booked"
});

createAppointment({
    id: 3,
    residentName: "Namal",
    date: "2026-08-11",
    status: "Booked"
});

createAppointment({
    id: 4,
    residentName: "Pancha",
    date: "2026-08-12",
    status: "Booked"
});

getAllAppointments();

console.log(findAppointmentById(1));

completeAppointment(1);

cancelAppointment(4);

console.log(getAppointmentsByStatus("Completed"));

generateAppointmentDashboard();