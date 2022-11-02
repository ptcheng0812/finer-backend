const { Sequelize } = require('sequelize');
// import { Details } from "../models/details";

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: ':memory:'
})


export default sequelize;
