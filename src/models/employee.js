const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Employee = sequelize.define("employee", {
        employeeId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true },
        phone: { type: DataTypes.BIGINT },
    });
    return Employee;
};

