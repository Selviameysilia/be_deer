"use strict";

const passwordUtil = require("../utils/password.util");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "John Doe",
        email: "johndoe@example.com",
        password: await passwordUtil.encrypt("789123"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Jane Doe",
        email: "janedoe@example.com",
        password: await passwordUtil.encrypt("789123"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
