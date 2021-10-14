"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("employees", [
      {
        name: "NTWARI Hugues",
        nId: "1199680127478028",
        code:"EMP1234",
        phoneNumber:"250781407229",
        email:"ntwari.hugues@gmail.com",
        status:"inactive",
        dob:"01/16/1996",
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
