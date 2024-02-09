const express = require('express');
const Controller = require('./controller');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post(`/login`, Controller.login);

router.get(`/countries_list`, authenticateToken, Controller.getCountriesList);

router.get(`/country/:country`, authenticateToken, Controller.getCountry);

router.post(`/country`, authenticateToken, Controller.addCountry);

module.exports = router;
