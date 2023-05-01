import bcrypt from 'bcrypt';

export const encrypt = async password => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
}

export const isPasswordCorrect = async (password, userPassword) => await bcrypt.compare(password, userPassword);
