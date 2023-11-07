'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sign.init({
    name: DataTypes.STRING,
    planet_id: DataTypes.INTEGER,
    element_id: DataTypes.INTEGER,
    modality_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sign',
    tableName: 'sign',
    underscored: true
  });
  return sign;
};