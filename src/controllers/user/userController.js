import * as usersService from '../../services/users/users.service.js';

export const all = async (req, res) => {
    const users = await usersService.getAll();
    res.json(users);
}

export const findById = async (req, res) => {
    const id = Number(req.params.id);
    const user = await usersService.getById(id);
    res.json(user);
}

export const store = async (req, res) => {
    
}

export const update = async (req, res) => {
    const id = Number(req.params.id);
    let user = req.body;
    user = await usersService.updateById(id, user);
    res.json(user);
}

export const deleteById = async (req, res) => {
    const id = Number(req.params.id);
    const user = await usersService.deleteById(id);
    res.json(user);
}