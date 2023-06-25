const express = require('express');
const { createUser, loginUser, checkAuth, resetPasswordRequest, resetPassword, logout } = require('../controller/AuthController');
const passport = require('passport');

const router = express.Router();
router.post('/signup', createUser)
.post('/login', passport.authenticate('local'), loginUser)
.post('/login', loginUser)
.get('/check',passport.authenticate('jwt'), checkAuth)
// .get('/check',checkAuth)
.get('/logout', logout)
.post('/resetPasswordRequest', resetPasswordRequest)
.post('/resetPassword', resetPassword)
exports.router = router;