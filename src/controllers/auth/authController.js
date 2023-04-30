import * as usersService from '../../services/users/users.service.js';

export const signin = async (req, res) => {
    
    res.render('signin');
}

export const signup = async (req, res) => {
    const { name, email, password, address } = req.body;

    if (!name || !email || !password || !address) {
        return res.status(400).send({ error: 'Se requiere nombre, correo electrónico, dirección de envió y contraseña' });
    }
    
    const user = req.body;
    user = await usersService.save(user);
    res.json(user);
}