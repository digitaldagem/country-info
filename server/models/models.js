const { v4: uuidv4 } = require('uuid');

class User {
    constructor(id, username, password) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
}
  
const users = [
    new User(uuidv4(), 'player_one', 'password_one'),
];

class Country {
    constructor(id, name, population, currencies) {
      this.id = id;
      this.name = name;
      this.population = population;
      this.currencies = currencies;
    }
}

const countries = [];
  
const Models = {
    getAllUsers: () => {
      return users;
    },
    getUserById: (userId) => {
      return users.find((user) => user.id == userId);
    },
    getAllCountries: () => {
      return countries;
    },
    getCountryById: (userId) => {
      return countries.find((user) => user.id == userId);
    },
    addCountry: (name, population, currencies) => {
      return countries.push(new Country(uuidv4(), name, population, currencies));
    },
};
  
module.exports = Models;