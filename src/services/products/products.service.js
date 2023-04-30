import ProductsDAOFFactory from "../../factorys/productoDAOFactory.js";

const productDao = ProductsDAOFFactory.getDao();

export const getAll = async () => {
    return await productDao.getAll();
}

export const save = async (newProduct) => {
    return await productDao.save(newProduct);
}

export const getById = async (id) => {
    return await productDao.getById(id);
}

export const updateById = async (id, newProduct) => {
    return await productDao.updateById(id, newProduct);
}

export const deleteById = async (id) => {
    return await productDao.deleteById(id);
}