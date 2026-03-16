import { getUsers } from './read.js';

export async function createUser(name, age, email) {
    const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age: parseInt(age), email }),
    });

    await response.json();
    getUsers();
}