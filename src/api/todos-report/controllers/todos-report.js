"use strict";

/**
 * A set of functions called "actions" for `todos-report`
 */

module.exports = {
  async todosReport(ctx, next) {
    try {
      const data = await strapi
        .service("api::todos-report.todos-report")
        .todosReport();

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
