//Busca os dados da API
async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    renderUsers(data.users); 
}

getUsers();