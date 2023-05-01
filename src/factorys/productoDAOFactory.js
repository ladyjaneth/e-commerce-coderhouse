import ProductDaoMem from '../daos/products/productDAOMem.js';
import ProductDAOFile from '../daos/products/productDAOFile.js';
import ProductDAODb from '../daos/products/productDAODb.js';
import dotenv from 'dotenv';

dotenv.config();

const rutaFile = './txt/products.txt';
const host = process.env.DB_MONGO_HOST || 'localhost';
const port = process.env.DB_MONGO_PORT || '27017';
const database = process.env.DB_MONGO_DATABASE || '27017';
const connString = `mongodb://${host}:${port}/${database}`;

const option = process.env.APP_STORE || 'Mem';

let dao
switch (option) {
    case 'Mongo':
        dao = new ProductDAODb(connString);
        await dao.init();
        break;

    case 'File':
        dao = new ProductDAOFile(rutaFile);
        await dao.init();
        break;

    default:
        dao = new ProductDaoMem();
        await dao.init(); 
        break;
}

export default class ProductsDAOFFactory{
    static getDao(){
        return dao;
    }
}






//1:30