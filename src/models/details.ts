const { Model, DataTypes } = require('sequelize');
import sequelize from "../db/config";

class Details extends Model { }

Details.init({
  firstName: {
    type: DataTypes.STRING
  },
  surName: {
    type: DataTypes.STRING
  },
  telephone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.STRING
  },
  comment: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'details',
  timestamps: false
})

module.exports = Details;
