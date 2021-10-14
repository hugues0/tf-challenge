"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("managers", [
      {
        name: "NTWARI Hugues",
        nId: "1199680127478028",
        code: "EMP1234",
        phoneNumber: "250781407229",
        email: "ntwari.hugues@gmail.com",
        password:"18700",
        status: "inactive",
        dob: "01/16/1996",
        position: "MANAGER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("managers", null, {});
  },
};
