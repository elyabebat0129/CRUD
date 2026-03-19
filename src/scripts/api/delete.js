import axios from 'axios';
import { getUsers } from './read.js';

export async function deleteUser(id) {
    try {
        await axios.delete(`http://localhost:8000/api/users?id=${id}`);
        getUsers();
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to delete user';
        throw new Error(message);
    }
}