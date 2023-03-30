const UsersModel = require('../models/users.model');

class AuthController {
    async renderSignUpPage(req, res) {
        return res.render('auth/signup');
    }

    async renderSignInPage(req, res) {
        return res.render('auth/signin', { errors: [], user: { email: '', password: '' } });
    }

    /**
     * Method To Register User
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async registerUser(req, res) {
        try {
            const { email, password } = req.body;

            const user = await UsersModel.findOne({ email });

            if (user) {
                return res.send('User with same email already exists');
            }

            const newUser = new UsersModel(req.body);
            await newUser.save();

            return res.send('User Registered Successfully....');
        } catch (error) {
            res.render('error', { error, message: error.message });
        }
    }

    /**
     * Method To Sign In User
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async signInUser(req, res) {
        const { email, password } = req.body;

        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.render('auth/signin', { errors: ['User With Email Does Not Exist'], user: { email, password } });
        }

        const isPasswordMatches = password === user.password;
        if (!isPasswordMatches) {
            return res.render('auth/signin', { errors: ['Invalid Username or password'], user: { email, password } });
        }

        req.session.userId = user._id;
        return res.redirect('/');
    }
}

module.exports = new AuthController();