import * as shoppingCartService from '../../services/shopping-cart/shoppingCart.service.js';

export const all = async (req, res) => {
    const userId = Number(req.params.userId);
    const shoppingCart = await shoppingCartService.getAll();
    res.json(shoppingCart);
}

export const store = async (req, res) => {
    const userId = Number(req.params.userId);
    let shoppingCart = req.body;
    shoppingCart = await shoppingCartService.save(shoppingCart);
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