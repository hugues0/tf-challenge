"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("employees", [
      {
        name: "NIYO jeezy",
        nId: "1199680127478678",
        code:"EMP1234",
        phoneNumber:"250781407568",
        email:"niyoeric@gmail.com",
        status:"inactive",
        dob:"01/01/1995",
        position:"DEVOPS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("employees", null, {});
  },
};
