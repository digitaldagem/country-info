require('dotenv').config();
const jwt = require('jsonwebtoken');
const axios = require('axios');

const Models = require('../models/models');

const Controller = {
  login: (req, res) => {
    const { username, password } = req.body;
    const user = Models.getAllUsers().find(u => u.username === username && u.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  },
  getCountriesList: (req, res) => {
    try {
        res.json(Models.getAllCountries);
    } catch (error) {
        console.error('Error getting country list:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getCountry: async (req, res) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.country}`);

      const countries = response.data.map(({ name, population, currencies }) => ({
        name,
        population,
        currencies,
      }));

      res.json(countries);
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  addCountry: (req, res) => {
    try {
        Models.addCountry(req.body.name, req.body.population, req.body.currencies)
        res.json(Models.getAllCountries());
    } catch (error) {
        console.error('Error adding country:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = Controller;