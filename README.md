# User Management CRUD

A user management CRUD application built with vanilla JavaScript, Bootstrap and Axios.
The project demonstrates how to perform full CRUD operations using a modular structure and a REST API.

---

## Features

* Create new users
* List all users
* Update user data (PUT and PATCH support)
* Delete users
* Modular structure with separated responsibilities
* Dynamic UI updates
* Responsive interface using Bootstrap

---

## Tech Stack

* JavaScript (ES Modules)
* Bootstrap
* Axios
* Docker
* Nginx

---

## Project Structure

```
src/
├── api/
│   ├── create.js
│   ├── read.js
│   ├── update.js
│   └── delete.js
├── render/
│   └── render.js
├── app.js
└── index.html
```

---

## Architecture

The project is organized by responsibility:

* API modules handle CRUD operations
* Render module updates the UI
* Main file (`app.js`) controls application flow

---

## How to Run

### Using Docker

```bash
docker compose up --build
```

After that, open your browser at the configured local address.

---

### Without Docker

1. Clone the repository:

```bash
git clone https://github.com/elyabebat0129/user-management-crud.git
```

2. Open the project folder

3. Run with a local server (for example, VS Code Live Server)

---

## API Requirements

This project requires a REST API that supports:

* `GET /users`
* `POST /users`
* `PUT /users/:id`
* `PATCH /users/:id`
* `DELETE /users/:id`

---

## What I Practiced

* Modular JavaScript with ES Modules
* CRUD operations using Axios
* Separation of concerns (API and UI)
* DOM manipulation and dynamic rendering
* REST API integration
* Running a frontend application with Docker and Nginx

---

## Future Improvements

* Form validation
* Loading states
* Error handling
* Search and filtering
* Pagination
* UI/UX improvements

---

## License

MIT
