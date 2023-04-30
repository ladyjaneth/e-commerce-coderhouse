import ShoppingCartDAOFactory from "../../factorys/shoppingCartDAOFactory.js";

const shoppingCartDao = ShoppingCartDAOFactory.getDao();

export const getAll = async () => {
    return await shoppingCartDao.getAll();
}

export const save = async (newProduct) => {
    return await shoppingCartDao.save(newProduct);
}

export const getById = async (id) => {
    return await shoppingCartDao.getById(id);
}

export const updateById = async (id, newProduct) => {
    return await shoppingCartDao.updateById(id, newProduct);
}

export const deleteById = async (id) => {
    return await shoppingCartDao.deleteById(id);
}