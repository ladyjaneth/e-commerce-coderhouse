export default class UsuarioDTO{
    constructor({id, nombre, email}){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
}

export function transformarUsuarioDTO(usuarios) {
    return Array.isArray(usuarios) ? usuarios.map(usuario => new UsuarioDTO(usuario)) : new UsuarioDTO(usuarios);
}