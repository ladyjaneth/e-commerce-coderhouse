import { transformUserDTO } from '../../dtos/userDTO.js';

export default class UsuarioDaoMem{
    constructor(){
        this.id = 1;
        this.users = [];
    }

    init(){
        console.log('user dao en memory ->listo!');
    }

    disconnect(){
        console.log('user dao en memory ->cerrado');
    }

    getIndex(id){
        return this.users.findIndex(user => user.id == id);
    }

    async getAll(){
        let usersDTO = [];
        try{
            usersDTO = await transformUserDTO(this.users);
        }catch(exception){
            console.error(exception);
        }
        return usersDTO;
    }

    async getById(id){
        let userDTO = {};
        try{
            userDTO = await transformUserDTO(this.users[this.getIndex(id)]);
        }catch(exception){
            console.error(exception);
        }
        return userDTO;
    }

    async save(user){
        let userDTO = {};
        try{
            user.id = this.generadorDeIds();
            this.users.push(user);
            userDTO = await transformUserDTO(user);
        }catch(exception){
            console.error(exception);
        }
        return userDTO;
    }

    async deleteById(id){
        let userDTO = {};
        try {
            const index = this.getIndex(id);
            const user = this.users[index];
            delete this.users[index];
            userDTO = transformUserDTO(user);
        } catch (exception) {
            console.error(exception);
        }
        return userDTO;
    }

    async updatedById(id, user){
        let userDTO = {};
        try {
            const index = this.getIndex(id);
            const userUpdated = {...this.users[index], ...user};
            this.users[index] = userUpdated;
            userDTO = transformUserDTO(userUpdated);
        } catch (exception) {
            console.error(exception);
        }
        return userDTO;
    }

    generadorDeIds(){
        return this.id++;
    }
}