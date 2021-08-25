"use strict";
module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: "ok",
    });
  },

  postMessage: async (ctx) => {
    // console.log(strapi.plugins.contactform.services.contactform.postMessage(data));

    const result =
      await strapi.plugins.contactform.services.contactform.postMessage(ctx);
    return result;
  },
};
