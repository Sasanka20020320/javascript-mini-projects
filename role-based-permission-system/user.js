let users = [
    {
        id: 1,
        name: "Kamal",
        role: "resident"
    },
    {
        id: 2,
        name: "Nimal",
        role: "officer"
    },
    {
        id: 3,
        name: "Sunil",
        role: "admin"
    }
];

const permissions = {
    resident: [
        "viewProfile",
        "createRequest"
    ],

    officer: [
        "viewProfile",
        "createRequest",
        "approveRequest",
        "generateReport"
    ],

    admin: [
        "viewProfile",
        "createRequest",
        "approveRequest",
        "generateReport",
        "manageUsers"
    ]
};

const validRoles = [
    "resident",
    "officer",
    "admin"
];

// Validate an user
function validateUser(user) {
    return (
        user.name?.length > 0 &&
        validRoles.includes(user.role)
    )
}

// Add an user
function createUser(user) {
    if(!validateUser(user)) {
        return false;
    }
    users.push(user);
    return true;
}

// Prints all users
function getAllUsers() {
    for(const user of users) {
        console.log(`ID: ${user.id} | ${user.name} | ${user.role}`);
    }
}

// Find an user by id
function findUserById(id) {
    return users.find(user => user.id === id);
}

// Update a user's role by id
function updateUserRole(id, newRole) {
    const user = users.find(user => user.id === id);

    if(!user) {
        return false;
    }

    if(!validRoles.includes(newRole)) {
        return false;
    }

    user.role = newRole;
    return true;
}

// Delete an user by id
function deleteUser(id) {
    const originalLength = users.length;

    users = users.filter(user => user.id !== id);

    return users.length < originalLength;
}

// Check if an user has permission
function hasPermission(user, action) {
    const rolePermission = permissions[user.role] || [];
    return rolePermission.includes(action);
}

// Output users by role
function getUsersByRole(role) {
    return users.filter(user => user.role === role);
}

// Print a statistic dashboard
function generateRoleDashboard() {
    const userCounts = users.reduce((acc, user) => {
        const role = user.role;
        acc[role] = (acc[role] || 0) + 1;
        return acc;
    }, {});

    console.log("===== ROLE DASHBOARD =====");
    console.log(Object.entries(userCounts).map(([key, value]) => `${key}: ${value}`).join("\n"));
    console.log(`Total Users: ${users.length}`);
}

function canApproveRequest(user) {
    return hasPermission(user, "approveRequest");
}

createUser({ id: 4, name: "Namal", role: "resident" });

getAllUsers();

console.log(findUserById(2));

updateUserRole(1, "officer");

deleteUser(4);

console.log(hasPermission(users[0], "approveRequest"));
console.log(hasPermission(users[1], "approveRequest"));

console.log(getUsersByRole("resident"));
console.log(getUsersByRole("officer"));

generateRoleDashboard();