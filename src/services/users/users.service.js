import UserDaoFactory from '../../factorys/usuarioDAOFactory.js';
import * as utilToken from '../../utils/token.js';
import * as crypt from '../../utils/crypt.js';
import { transformUserDTO } from '../../dtos/userDTO.js';

const userDao = UserDaoFactory.getDao();

export const getAll = async () => {
    return await userDao.getAll();
}

export const save = async (newUser) => {
    newUser.password = await crypt.encrypt(newUser.password);
    const userDto = await userDao.save(newUser);
    userDto.token = utilToken.generateToken(userDto.id);
    return userDto;
}

export const getById = async (id) => {
    return await userDao.getById(id);
}

export const getByEmailPassword = async (email, password) => {
    const user = await userDao.getByEmail(email);
    if(user === undefined)
        return { error: 'Correo no encontrado' };

    if(!crypt.isPasswordCorrect(password, user.password))
        return { error: 'Contraseña incorrecta' };

    const userDto = transformUserDTO(user);
    userDto.token = utilToken.generateToken(user.id);

    return userDto;
}

export const updateById = async (id, newUser) => {
    return await userDao.updateById(id, newUser);
}

export const deleteById = async (id) => {
    return await userDao.deleteById(id);
}