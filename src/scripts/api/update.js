import { getUsers } from './read.js';

export function editUser(id, name, age, email) {
    document.getElementById('formEdit').style.display = 'block';
    document.getElementById('editId').value = id;
    document.getElementById('editName').value = name;
    document.getElementById('editAge').value = age;
    document.getElementById('editEmail').value = email;
}

export async function updateUser(id, name, age, email) {
    const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age: parseInt(age), email }),
    });

    await response.json();
    document.getElementById('formEdit').style.display = 'none';
    getUsers();
}