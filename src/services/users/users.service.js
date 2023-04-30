import UserDaoFactory from "../../factorys/productoDAOFactory.js";

const userDap = UserDaoFactory.getDao();

export const getAll = async () => {
    return await userDap.getAll();
}

export const save = async (newUser) => {
    return await userDap.save(newUser);
}

export const getById = async (id) => {
    return await userDap.getById(id);
}

export const updateById = async (id, newUser) => {
    return await userDap.updateById(id, newUser);
}

export const deleteById = async (id) => {
    return await userDap.deleteById(id);
}