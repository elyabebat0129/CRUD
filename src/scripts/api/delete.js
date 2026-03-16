//Delete user pelo ID
async function deleteUser(id) {
    const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
        method: "DELETE",
    });

    const result = await response.json();
    getUsers();
}