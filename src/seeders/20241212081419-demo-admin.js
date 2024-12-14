"use strict";

const passwordUtil = require("../utils/password.util");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins", [
      {
        username: "Admin1",
        email: "admin@g.c",
        password: await passwordUtil.encrypt("789123"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Admin2",
        email: "a@b.c",
        password: await passwordUtil.encrypt("789123"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
