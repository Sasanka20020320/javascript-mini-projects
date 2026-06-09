# Appointment Scheduler

A JavaScript mini project that simulates an appointment scheduling system for a Grama Niladhari office.

## Features

- Create Appointments
- Validate Appointment Data
- View All Appointments
- Find Appointment by ID
- Complete Appointments
- Cancel Appointments
- Filter Appointments by Status
- Generate Appointment Dashboard Statistics
- Prevent Double Booking

## Concepts Used

- Arrays and Objects
- Functions
- CRUD-style Operations
- Data Validation
- Business Rules
- Status Management
- Array Methods (`find`, `filter`, `reduce`)
- Dashboard Reporting

## Business Rules

### Appointment Status Workflow

```text
Booked → Completed
Booked → Cancelled
````

Completed or cancelled appointments cannot be modified again.

### Double Booking Prevention

The system prevents multiple appointments from being scheduled on the same date.

Example:

Appointment 1:
2026-08-10

Appointment 2:
2026-08-10

Result:
Creation Failed

## Functions

### Validation

- `validateAppointment()`

### Appointment Management

- `createAppointment()`
- `getAllAppointments()`
- `findAppointmentById()`

### Status Management

- `completeAppointment()`
- `cancelAppointment()`
- `getAppointmentsByStatus()`

### Reporting

- `generateAppointmentDashboard()`

## Example Dashboard Output

```text
===== APPOINTMENT DASHBOARD =====

Booked: 2
Completed: 1
Cancelled: 1

Total Appointments: 4

## Future Improvements

* Appointment Time Slots
* Multiple Officers
* Appointment Rescheduling
* Appointment History
* SMS Notifications
* File Storage (JSON)
* Node.js Integration
* Express.js REST API
* MongoDB Database Integration

## Learning Goal

This project is part of my JavaScript backend development learning path and serves as preparation for building a full-stack Digital Grama Niladhari Administration System using the MERN stack.