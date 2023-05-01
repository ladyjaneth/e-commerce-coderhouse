import * as shoppingCartService from '../../services/shopping-cart/shoppingCart.service.js';
import * as userService from '../../services/users/users.service.js';

export const all = async (req, res) => {
    const userId = Number(req.params.userId);
    const user = userService.getById(userId);
    const shoppingCart = await shoppingCartService.getAll(user);
    res.json(shoppingCart);
}

export const store = async (req, res) => {
    const userId = Number(req.params.userId);
    const user = userService.getById(userId);
    let shoppingCart = req.body;
    shoppingCart = await shoppingCartService.save(user, shoppingCart);
    res.json(shoppingCart);
}

export const update = async (req, res) => {
    const userId = Number(req.params.userId);
    const id = Number(req.params.id);
    let shoppingCart = req.body;
    shoppingCart = await shoppingCartService.updateById(id, shoppingCart);
    res.json(shoppingCart);
}

export const deleteById = async (req, res) => {
    const userId = Number(req.params.userId);
    const id = Number(req.params.id);
    const shoppingCart = await shoppingCartService.deleteById(id);
    res.json(shoppingCart);
}