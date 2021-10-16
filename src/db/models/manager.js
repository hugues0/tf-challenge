"use strict";
import Model from "sequelize";

module.exports = (sequelize, DataTypes) => {
  const manager = sequelize.define("manager", {
    name: { type: DataTypes.STRING, allowNull: false },
    nId: { type: DataTypes.NUMBER, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.NUMBER, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    dob: { type: DataTypes.DATE, allowNull: false },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    position: { type: DataTypes.STRING, allowNull: false },
  });

  manager.associate = function (models) {};
  return manager;
};
