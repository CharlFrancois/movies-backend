const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:datas.db');

const Opinion = require('./Opinion')(sequelize, DataTypes)
const Movie = require('./Movie')(sequelize, DataTypes)

// Un article peut être écrit par une seule personne
Opinion.belongsTo(Movie)
// une personne peut écrire plusieurs articles
Movie.hasMany(Opinion)

module.exports = sequelize