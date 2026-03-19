import axios from 'axios';
import { getUsers } from './read.js';

let originalUser = null;

export function editUser(id, name, age, email) {
    originalUser = { id, name, age: parseInt(age), email };

    document.getElementById('formEdit').style.display = 'block';
    document.getElementById('editId').value = id;
    document.getElementById('editName').value = name;
    document.getElementById('editAge').value = age;
    document.getElementById('editEmail').value = email;
}

async function putUser(id, name, age, email) {
    try {
        const response = await axios.put(`http://localhost:8000/api/users?id=${id}`, {
            name,
            age: parseInt(age),
            email,
        });
        return response.data;
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to update user';
        throw new Error(message);
    }
}

async function patchUser(id, fields) {
    if (fields.age !== undefined) {
        fields.age = parseInt(fields.age);
    }

    try {
        const response = await axios.patch(`http://localhost:8000/api/users?id=${id}`, fields);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to patch user';
        throw new Error(message);
    }
}

export async function updateUser(id, name, age, email) {
    const changed = {};
    if (name !== originalUser.name)         changed.name = name;
    if (parseInt(age) !== originalUser.age) changed.age = age;
    if (email !== originalUser.email)       changed.email = email;

    if (Object.keys(changed).length === 0) {
        document.getElementById('formEdit').style.display = 'none';
        originalUser = null;
        return;
    }

    const allChanged = Object.keys(changed).length === 3;

    try {
        if (allChanged) {
            await putUser(id, name, age, email);
        } else {
            await patchUser(id, changed);
        }

        document.getElementById('formEdit').style.display = 'none';
        originalUser = null;
        getUsers();
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
    }
}