import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const privateKey = process.env.APP_PRIVATE_KEY || 'secret_key';

export const generateToken = usuarioId =>  {
    const token = jwt.sign({ id: usuarioId }, privateKey, { expiresIn: '1d' });
    return token;
}