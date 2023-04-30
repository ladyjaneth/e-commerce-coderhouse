export default class UserDTO{
    constructor({id, name, email, address}){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
}

export function transformUserDTO(users) {
    return Array.isArray(users) ? users.map(user => new UserDTO(user)) : new UserDTO(users);
}