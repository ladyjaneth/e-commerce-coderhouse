import ShoppingCartDaoMem from '../daos/shopping-cart/shoppingCartDAOMem.js';
import ShoppingCartDAOFile from '../daos/shopping-cart/shoppingCartDAOFile.js';
import ShoppingCartDAODb from '../daos/shopping-cart/shoppingCartDAODb.js';
import dotenv from 'dotenv';

dotenv.config();

const rutaFile = './txt/shopping-cart.txt';
const host = process.env.DB_MONGO_HOST || 'localhost';
const port = process.env.DB_MONGO_PORT || '27017';
const database = process.env.DB_MONGO_DATABASE || '27017';
const connString = `mongodb://${host}:${port}/${database}`;

const option = process.env.APP_STORE || 'Mem';

let dao
switch (option) {
    case 'Mongo':
        dao = new ShoppingCartDAODb(connString);
        await dao.init();
        break;

    case 'File':
        dao = new ShoppingCartDAOFile(rutaFile);
        await dao.init();
        break;

    default:
        dao = new ShoppingCartDaoMem();
        await dao.init(); 
        break;
}

export default class ShoppingCartDAOFactory{
    static getDao(){
        return dao;
    }
}