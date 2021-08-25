"use strict";
// const { default: createStrapi } = require("strapi");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByName: async (ctx) => {
    return await strapi.services.author.findByName(ctx);
  },
};
