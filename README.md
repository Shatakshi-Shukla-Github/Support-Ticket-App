<h1><a href="https://support-ticket-app-frontend.onrender.com">Support Desk</a></h1>

Support Desk is a full-stack customer support ticket application built with React, Redux, Express, and MongoDB. It allows users to create accounts, log in, submit support tickets, review their ticket history, and add notes to ongoing issues.

<h2>Technologies Used</h2>

<ul>
<li><b>Frontend:</b></li>
  <p>
  <ul>
    <li>React with functional components and hooks</li>
    <li>Vite</li>
    <li>Redux Toolkit for state management</li>
    <li>React Router</li>
    <li>React Toastify</li>
  </ul>
</p>
  
<li><b>Backend:</b></li>
<p>
  <ul>
    <li>Node.js and Express.js</li>
    <li>MongoDB with Mongoose ODM</li>
    <li>JWT Authentication</li>
    <li>Custom authentication middleware</li>
    <li>Custom error handler</li>
  </ul>
</p>
<li>Deployment</li>
<p>
  <ul>
    <li>Currently deployed on Render</li>
  </ul>
</p>
</ul>


<h2>Features</h2>
<ul>
<p>
    <li>
      <h3>User registration and login:-</h3>
      <img width="1920" height="854" alt="Support Desk Login" src="https://github.com/user-attachments/assets/0931062b-ba9c-4b5f-a603-c24ea98e49b1" />
      <img width="1920" height="857" alt="Support Desk Register" src="https://github.com/user-attachments/assets/656333a3-1d75-4d92-bb1d-3c6f8b6f62e7" />
    </li>
</p>

<p>
    <li>
      <h3>Create new support tickets:-</h3>
      <img width="1920" height="866" alt="Support Desk Create Ticket" src="https://github.com/user-attachments/assets/d7c9e34d-6508-4af5-b625-7c97c65a2073" />
    </li>
</p>

<p>
    <li>
      <h3>View all tickets for the logged-in user:-</h3>
     <img width="1920" height="852" alt="Support Desk Tickets" src="https://github.com/user-attachments/assets/9c31338f-df8e-43b5-b9ac-28b0d7e3ab72" />
    </li>
</p>

<p>
    <li>
      <h3>Open a single ticket to see full details:-</h3>
     <img width="1920" height="864" alt="Support Desk Ticket Overview" src="https://github.com/user-attachments/assets/723f847d-1d7b-4606-8237-503eab0e5f23" />
    </li>
</p>
  
</p>

<p>
    <li>
      <h3>Add notes to a ticket:-</h3>
    <img width="1920" height="864" alt="Support Desk Add Note" src="https://github.com/user-attachments/assets/1453c73b-e460-4065-8e71-4c478ac8921b" />
    </li>

</p>

<p>
    <li>
      <h3>Close resolved tickets:-</h3>
    <img width="1920" height="859" alt="Support Desk Close Ticket" src="https://github.com/user-attachments/assets/013ee770-1f5d-4637-be3f-774dbf329a31" />
    </li>

</p>

<p>
    <li>
      <h3>Track ticket status (new, open, closed):-</h3>
    <img width="1920" height="852" alt="Support Desk Tickets" src="https://github.com/user-attachments/assets/1ec70d95-f033-46f8-8d84-d64ef331863f" />
    </li>
</p>

</ul>


## Pages and Functionality

### 1. Home Page

The home page is the starting entry point for the app. It gives users two main actions:

- Create New Ticket
- View My Tickets

This page is designed to guide users into the support workflow quickly.

### 2. Register Page

The register page allows a new user to create an account.

Fields:
- Name
- Email
- Password
- Confirm Password

Validation:
- Passwords must match
- Required fields are enforced
- On successful registration, the user is redirected to the home page

### 3. Login Page

The login page lets an existing user sign in with their email and password.

Functionality:
- Authenticates using JWT
- Redirects to the home page after successful login
- Displays error messages when credentials are invalid

### 4. New Ticket Page

This page is used to create a new support ticket.

Fields:
- Customer Name (auto-filled from logged-in user)
- Customer Email (auto-filled from logged-in user)
- Product (choices include iPhone, Macbook Pro, iMac, and iPad)
- Description of issue

Actions:
- Submit the new ticket
- Redirect to the ticket list after a successful submission

The ticket is saved with a default status of `new`.

### 5. Tickets Page

The tickets page displays a list of all tickets submitted by the current logged-in user.

Each ticket row shows:
- Submission date
- Product name
- Current status
- View button to open the full ticket

The list is available only to authenticated users through private routes.

### 6. Ticket Detail Page

The ticket detail page shows the full record for a specific ticket.

Information displayed:
- Ticket ID
- Status badge
- Date submitted
- Product
- Full issue description
- Notes attached to the ticket

Actions available:
- Add a note
- Close the ticket if it is still open

### 7. Notes Functionality

Each ticket supports notes, which are comments or updates related to the case.

Notes can be added from the individual ticket page using a modal form.

A note includes:
- Text content
- Timestamp
- Owner information
- Ticket association

Notes help track the conversation and progress of a support issue.

### 8. Ticket Status Workflow

Tickets use the following statuses:
- `new` - a newly created support request
- `open` - the issue is being worked on
- `closed` - the issue has been resolved and closed

The app allows the user to close a ticket from the ticket details view.

## Backend API Overview

The backend exposes a set of protected routes for support desk operations.

### Authentication routes

- `POST /api/users` - register a user
- `POST /api/users/login` - log in a user
- `GET /api/users/me` - get the current authenticated user

### Ticket routes

- `GET /api/tickets` - get all tickets for the logged-in user
- `POST /api/tickets` - create a new ticket
- `GET /api/tickets/:id` - get one ticket
- `PUT /api/tickets/:id` - update a ticket
- `DELETE /api/tickets/:id` - delete a ticket

### Note routes

- `GET /api/tickets/:ticketId/notes` - get notes for a ticket
- `POST /api/tickets/:ticketId/notes` - add a note to a ticket

## Authentication and Authorization

The application uses a JWT-based auth flow.

- User registration creates a new user record.
- Login returns a token.
- Protected routes require the JWT in the Authorization header.
- Users can only access their own tickets and notes.

## Environment Variables

Create a `.env` file in the project root with values similar to:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Running the Project

### Install dependencies

```bash
npm install
cd frontend
npm install
cd ..
```

### Start the app

```bash
npm run dev
```

This runs both the backend server and the frontend development server concurrently.

## Final Notes

This project is a complete support ticket workflow built for customer support scenarios. It focuses on user authentication, ticket management, and issue tracking, making it a good example of a typical support desk application.
