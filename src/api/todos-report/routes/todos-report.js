module.exports = {
  routes: [
    {
      method: "GET",
      path: "/todos-report",
      handler: "todos-report.todosReport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
