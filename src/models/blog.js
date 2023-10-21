'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blog.init({
    title: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    content: DataTypes.STRING,
    technologies: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    author: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'blog',
    timestamps: true,
    createdAt: getFulltime(new Date()),
    updatedAt: true,
  });
  return blog;
};