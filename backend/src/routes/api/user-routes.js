const express = require('express');
const router = express.Router();
const UserController = require('../controller/user-controller');

router.post('/register', (req, res) => {
    UserController.register(req, res);
});

// retrieve user
router.get('/session/:id', (req, res) => {
    UserController.retrieveUser(req, res);
});

// update user
router.post("/update/:id", (req, res) => {
    UserController.update(req, res);
});

// delete user
router.delete('/delete/:id', (req, res) => {    
    UserController.deleteAccount(req, res);
});

// confirm password
router.post("/validate", (req, res) => {
    UserController.validate(req, res);
});

router.post('/login', (req, res) => {
    UserController.login(req, res);
});
        

router.delete('/logout/:id', (req, res) => {
    UserController.logout(req, res);
});

module.exports = router;