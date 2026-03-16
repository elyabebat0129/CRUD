//Form com infos do user
function editUser(id, name, age, email) {
    document.getElementById('formEdit').style.display = 'block';
    document.getElementById('editId').value = id;
    document.getElementById('editName').value = name;
    document.getElementById('editAge').value = age;
    document.getElementById('editEmail').value = email;
}


//Função edit user
async function updateUser() {
    const id = document.getElementById('editId').value;

    const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("editName").value,
            age: document.getElementById("editAge").value,
            email: document.getElementById("editEmail").value,
        }),
    });

    const updated = await response.json();
    document.getElementById('formEdit').style.display = 'none';
    getUsers();
}