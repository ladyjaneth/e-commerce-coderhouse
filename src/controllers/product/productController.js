import * as productsService from '../../services/products/products.service.js';

export const all = async (req, res) => {
    const products = await productsService.getAll();
    res.json(products);
}

export const findById = async (req, res) => {
    const id = Number(req.params.id);
    const product = await productsService.getById(id);
    res.json(product);
}

export const store = async (req, res) => {
    let product = req.body;
    product = await productsService.save(product);
    res.json(product);
}

export const update = async (req, res) => {
    const id = Number(req.params.id);
    let product = req.body;
    product = await productsService.updateById(id, product);
    res.json(product);
}

export const deleteById = async (req, res) => {
    const id = Number(req.params.id);
    const product = await productsService.deleteById(id);
    res.json(product);
}