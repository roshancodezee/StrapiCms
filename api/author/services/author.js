"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  findByName: async (ctx) => {
    const { name } = ctx.params;

    const result = await strapi
      .query("author")
      .model.query((qb) => {
        qb.where("Name", name);
      })
      .fetchAll({ columns: ["Name"] });

    // const result = await strapi.services.author.findOne({ Name: name });
    // console.log(result);
    return sanitizeEntity(result, { model: strapi.models.author });
  },
};
