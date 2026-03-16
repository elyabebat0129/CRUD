import { createUser } from '../api/create.js';
import { getUsers } from '../api/read.js';
import { editUser, updateUser } from '../api/update.js';
import { deleteUser } from '../api/delete.js';

window.createUser = () => createUser(
    document.getElementById('name').value,
    document.getElementById('age').value,
    document.getElementById('email').value
);

window.editUser = editUser;

window.updateUser = () => updateUser(
    document.getElementById('editId').value,
    document.getElementById('editName').value,
    document.getElementById('editAge').value,
    document.getElementById('editEmail').value
);

window.deleteUser = deleteUser;
window.getUsers = getUsers;

getUsers();