# Support Desk Frontend

This frontend is the user interface for the Support Desk application. It handles sign-up, login, ticket creation, ticket viewing, ticket status updates, and notes management for each support request.

## Pages in the app

### Home
The landing page presents the two main actions:
- Create New Ticket
- View My Tickets

### Register
A user can create an account using their name, email, and password. The form validates matching passwords and redirects them to the home page after successful registration.

### Login
A returning user can log in with their email and password. The app authenticates them with JWT and redirects them to the home page after a successful login.

### New Ticket
The user fills in a support request by selecting a product and describing the problem. The page auto-populates their name and email from the logged-in account.

### Tickets
This page lists all tickets submitted by the logged-in user. Each ticket shows the date, product, status, and a button to view more details.

### Ticket Details
The detailed ticket page displays the ticket ID, product, created date, issue description, and all related notes. The user can add notes and close the ticket once it is resolved.

### Notes
Each ticket can have one or more notes. Notes are recorded as updates related to the support issue and are shown in chronological order.

## Main technologies used

- React
- Vite
- Redux Toolkit
- React Router
- React Toastify
- React Icons
- Axios

## Running the frontend

From the project root:

```bash
npm run client
```

Or from the frontend folder:

```bash
cd frontend
npm run dev
```
