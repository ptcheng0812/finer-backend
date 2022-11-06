const { Model, DataTypes } = require('sequelize');
import sequelize from "../db/config";

class Details extends Model { }

Details.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'details',
  timestamps: false
})

module.exports = Details;
