const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.route('/signup')
    .get(async (req, res) => authController.renderSignUpPage(req, res))
    .post(async (req, res) => authController.registerUser(req, res));

router.route('/signin')
    .get(async (req, res) => authController.renderSignInPage(req, res))
    .post(async (req, res) => authController.signInUser(req, res));

module.exports = router;