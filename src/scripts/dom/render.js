export function renderUsers(users) {
    const table = document.getElementById('table');
    table.innerHTML = "";
    users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editUser(${user.id}, '${user.name}', ${user.age}, '${user.email}')">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}