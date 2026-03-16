
// Mostrar infos na table
async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    const users = data.users;

    table.innerHTML = "";

    users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
    
}

getUsers();