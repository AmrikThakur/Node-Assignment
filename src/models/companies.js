const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Company = sequelize.define('company', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.BIGINT },
    website: { type: DataTypes.STRING },
  });
  return Company;
};
