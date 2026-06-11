# GN Administration Dashboard

A JavaScript mini project that simulates a Grama Niladhari (GN) Administration Dashboard by combining residents, requests, appointments, and user data into a centralized reporting system.

## Features

* Track Residents
* Track Certificate Requests
* Track Appointments
* Track System Users
* Generate Dashboard Statistics
* Generate Request Statistics
* Generate Appointment Statistics
* Generate Role Statistics
* Find Resident Requests
* Find Resident Appointments
* Generate Resident Summaries

## Concepts Used

* Arrays and Objects
* Functions
* Data Aggregation
* Array Methods

  * `find()`
  * `filter()`
  * `reduce()`
* Dashboard Reporting
* Relationship Mapping
* Data Analytics

## Functions

### Count Functions

* `getTotalResidents()`
* `getTotalRequests()`
* `getTotalAppointments()`
* `getTotalUsers()`

### Statistics Functions

* `getRequestStatistics()`
* `getAppointmentStatistics()`
* `getRoleStatistics()`

### Relationship Queries

* `findResidentRequests(residentId)`
* `findResidentAppointments(residentId)`

### Dashboard

* `generateSystemDashboard()`

### Resident Summary

* `getResidentSummary(residentId)`

## Example Dashboard Output

```text
===== GN ADMINISTRATION DASHBOARD =====

Residents: 3
Requests: 3
Appointments: 2
Users: 3

Request Statistics
Pending: 1
Approved: 1
Rejected: 1

Appointment Statistics
Booked: 1
Completed: 1

Role Statistics
resident: 1
officer: 1
admin: 1
```

## Example Resident Summary

```javascript
getResidentSummary(1);
```

Output:

```javascript
{
  resident: {
    id: 1,
    name: "Kamal"
  },

  requests: [
    {
      id: 1,
      residentId: 1,
      status: "Pending"
    }
  ],

  appointments: [
    {
      id: 1,
      residentId: 1,
      status: "Booked"
    }
  ]
}
```

## Future Improvements

* Resident CRUD Operations
* Request CRUD Operations
* Appointment CRUD Operations
* User Authentication
* Role-Based Access Control
* Data Persistence with JSON Files
* Node.js Integration
* Express REST API
* MongoDB Database Integration
* Dashboard Visualizations

## Learning Goal

This project combines the concepts learned in previous mini projects and serves as a foundation for building a full-stack Digital Grama Niladhari Administration System using the MERN stack.