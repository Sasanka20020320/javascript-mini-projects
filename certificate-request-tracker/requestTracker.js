let requests = [
    {
        id: 1,
        residentName: "Kamal",
        type: "Residence Certificate",
        status: "Pending"
    },
    {
        id: 2,
        residentName: "Nimal",
        type: "Income Certificate",
        status: "Approved"
    }
];

// Vlaidate a request
function validateRequest(request) {
    return (
        request.residentName &&
        request.type &&
        request.status
    );
}

// Create a request
function createRequest(request) {
    if(!validateRequest(request)) {
        return false;
    }
    requests.push(request);
    return true;
}

// Print all requests
function getAllRequests() {
    for(const request of requests) {
        console.log(`ID: ${request.id} | ${request.residentName} | ${request.status}`);
    }
}

// Find a request by id
function findRequestById(id) {
    return requests.find(request => request.id === id);
}

// Approve a pending request by id
function approveRequest(id) {
    const request = requests.find(request => request.id === id);

    if(!request) {
        return false;
    }

    if(request.status !== "Pending") {
        return false;
    }
    request.status = "Approved";
    return true;
}

// Reject a pending request by id
function rejectRequest(id) {
    const request = requests.find(request => request.id === id);

    if(!request) {
        return false;
    }

    if(request.status !== "Pending") {
        return false;
    }
    request.status = "Rejected";
    return true;
}

// Print requests according to the request status
function getRequestsByStatus(status) {
    return requests.filter(request => request.status === status);
}

// Print a statistic dashboard for requests
function generateDashboard() {
    const requestCounts = requests.reduce((acc, request) => {
        const status = request.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});

    console.log("===== REQUEST DASHBOARD =====");
    console.log(Object.entries(requestCounts).map(([key, value]) => `${key}: ${value}`).join("\n"));
    console.log(`Total Requests: ${requests.length}`);
}

createRequest({
    id: 3,
    residentName: "Sunil",
    type: "Character Certificate",
    status: "Pending"
});

getAllRequests();

console.log(findRequestById(2));

approveRequest(3);

rejectRequest(1);

console.log(getRequestsByStatus("Rejected"));

generateDashboard();