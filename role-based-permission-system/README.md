# User & Role Management System

A JavaScript mini project that simulates user management and role-based access control (RBAC) for a Grama Niladhari Administration System.

## Features

- Create Users
- Validate User Data
- View All Users
- Find User by ID
- Update User Roles
- Delete Users
- Check User Permissions
- Filter Users by Role
- Generate Role Statistics Dashboard
- Role-Based Access Control (RBAC)

## Roles

### Resident

Permissions:

- viewProfile
- createRequest

### Officer

Permissions:

- viewProfile
- createRequest
- approveRequest
- generateReport

### Admin

Permissions:

- viewProfile
- createRequest
- approveRequest
- generateReport
- manageUsers

## Concepts Used

- Arrays and Objects
- Functions
- CRUD Operations
- Data Validation
- Authorization
- Role-Based Access Control (RBAC)
- Business Rules
- Array Methods (`find`, `filter`, `reduce`)
- Dashboard Reporting

## Functions

### Validation

- `validateUser()`

### User Management

- `createUser()`
- `getAllUsers()`
- `findUserById()`
- `updateUserRole()`
- `deleteUser()`

### Authorization

- `hasPermission()`
- `canApproveRequest()`

### Filtering

- `getUsersByRole()`

### Reporting

- `generateRoleDashboard()`

### Future Improvements
- Login System
- Password Validation
- Password Hashing
- Authentication
- JWT Tokens
- Role-Based Middleware
- Database Integration
- User Activity Logs
- Express.js REST API
- MongoDB Integration

### Learning Goal
This project is part of my JavaScript backend development learning path and serves as preparation for implementing authentication, authorization, and role management in a full-stack Digital Grama Niladhari Administration System using the MERN stack.