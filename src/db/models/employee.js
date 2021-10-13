'use strict';
import Model from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee',{
    name: {type:DataTypes.STRING, allowNull:false},
    nId: {type:DataTypes.NUMBER, allowNull:false},
    code: {type:DataTypes.STRING, allowNull:false},
    phoneNumber: {type:DataTypes.NUMBER, allowNull:false},
    email: {type:DataTypes.STRING, allowNull:false},
    dob: {type:DataTypes.DATE, allowNull:false},
    status: {type:DataTypes.STRING, allowNull:false,defaultValue:"INACTIVE"},
    position: {type:DataTypes.STRING, allowNull:false}
  })

  employee.associate = function (models) {}
  return employee
   
  }