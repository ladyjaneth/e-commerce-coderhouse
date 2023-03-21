import { transformarUsuarioDTO } from '../../dtos/usuarioDTO.js';

export default class UsuarioDaoMem{
    constructor(){
        this.usuarios = [];
    }

    async getIndex(id){
        return await this.usuarios.findIndex(usuario => usuario.id == id);
    }

    async getAll(){
        let usuariosDTO = [];
        try{
            usuariosDTO = await transformarUsuarioDTO(this.usuarios);
        }catch(exception){
            console.error(exception);
        }
        return usuariosDTO;
    }

    async getById(id){
        let usuarioDTO = {};
        try{
            usuarioDTO = await transformarUsuarioDTO(this.usuarios[this.getIndex(id)]);
        }catch(exception){
            console.error(exception);
        }
        return usuarioDTO;
    }

    async save(usuario){
        let usuarioDTO = {};
        try{
            this.usuarios.push(usuario)
            usuarioDTO = await transformarUsuarioDTO(usuario);
        }catch(exception){
            console.error(exception);
        }
        return usuarioDTO;
    }

    async deleteById(id){
        let usuarioDTO = {};
        try {
            usuarioDTO = transformarUsuarioDTO(this.usuarios.slice(this.getIndex(id), 1));
        } catch (exception) {
            console.error(exception);
        }
        return usuarioDTO;
    }

    async updatedById(id, usuario){
        let usuarioDTO = {};
        try {
            const index = this.getIndex(id);
            const usuarioActualizado = {...this.usuarios[index], usuario};
            this.usuarios.slice(index, 1, usuarioActualizado);
            usuarioDTO(usuarioActualizado);
        } catch (exception) {
            console.error(exception);
        }
        return usuarioDTO;
    }
}