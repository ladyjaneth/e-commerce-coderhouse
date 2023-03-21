export const signin = async (req, res) => {
    res.render('signin');
}

export const storeSession = async (req, res) => {
    res.redirect('/sign/up');
}

export const signup = async (req, res) => {
    res.render('signup');
}

export const storeUser = async (req, res) => {
    res.render('signup');
}

export const signout = async (req, res) => {
    res.redirect('/sign/in');
}