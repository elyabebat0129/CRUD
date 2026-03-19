import axios from 'axios';
import { getUsers } from './read.js';

export async function createUser(name, age, email) {
    try {
        await axios.post("http://localhost:8000/api/users", {
            name,
            age: parseInt(age),
            email,
        });
        getUsers();
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to create user';
        throw new Error(message);
    }
}