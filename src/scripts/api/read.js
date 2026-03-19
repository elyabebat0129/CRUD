import axios from 'axios';
import { renderUsers } from '../dom/render.js';

export async function getUsers() {
    try {
        const response = await axios.get("http://localhost:8000/api/users");
        renderUsers(response.data.users);
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to fetch users';
        throw new Error(message);
    }
}