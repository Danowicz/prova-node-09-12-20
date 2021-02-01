import User from './models/user.model'

const users: Array<User> = [
    {
        id: 1,
        name: "João",
        username: "joao",
        email: "joao@gmail.com"
    }
];

function getUser (id: number): User | string {
    return users.find(user => user.id === id);
}

function createUser ({name, username, email}): void {
    if (name && username && email){
        users.push(new User(users.length + 1, name, username, email));
    } else {
        throw new Error("Para criar um usuário, insira 'name', 'username' e 'email'.")
    }
}

function updateUser (index: number, data): void {
    if (data.name || data.username || data.email) {
        const user = users[index];
        Object.keys(data).forEach(key => {
            if(key === 'name' || key === 'username' || key === 'email') {
                user[key] = data[key];
            }
        })
        users[index] = user;
    } else {
        throw new Error("Para alterar um usuário insira pelo menos uma de suas propriedades: 'name', 'username', 'email'");
    }

}

function deleteUser (index: number): void {
    users.splice(index, 1);
}

export { getUser, createUser, updateUser, deleteUser, users };

