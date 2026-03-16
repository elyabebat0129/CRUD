// Função criar usuário
async function createUser() {
    const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            age: parseInt(document.getElementById("age").value),
            email: document.getElementById("email").value
        }),
    });

    const created = await response.json();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    getUsers();
}