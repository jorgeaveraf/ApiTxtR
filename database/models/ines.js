'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ines.init({
    name: DataTypes.STRING,
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    ciudad: DataTypes.STRING,
    estado: DataTypes.STRING,
    curp: DataTypes.STRING,
    fechaNacimiento: DataTypes.STRING,
    sexo: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ines',
  });
  return Ines;
};