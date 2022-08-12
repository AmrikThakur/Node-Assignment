const { DataTypes } = require('sequelize')
const Joi = require('joi')

module.exports = (sequelize) => {
    const Company = sequelize.define("company", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: true },
        phone: { type: DataTypes.BIGINT },
        website: { type: DataTypes.STRING },
    });
    return Company;
};