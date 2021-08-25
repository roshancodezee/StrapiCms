"use strict";

module.exports = {
  postMessage: async (ctx) => {
    const data = ctx.request.body;
    const result = await strapi.entityService.create(
      { data },
      { model: "plugins::contactForm.message" }
    );
    return result;
  },
};
