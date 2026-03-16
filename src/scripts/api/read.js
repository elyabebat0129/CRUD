import { renderUsers } from '../dom/render.js';

export async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    renderUsers(data.users);
}