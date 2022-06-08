module.exports = {
  todosReport: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany("api::todo.todo", {
        fields: ["id", "title", "priority", "status"],
      });
      let groupedPriority = groupArrayOfObjects(entries, "priority");
      let groupedStatus = groupArrayOfObjects(entries, "status");
      const priorityArray = Object.entries(groupedPriority);
      priorityArray.unshift(["Priority", "Count"]);
      const statusArray = Object.entries(groupedStatus);
      statusArray.unshift(["Status", "Count"]);
      const obj = {
        priorityChartData: priorityArray,
        statusChartData: statusArray,
      };

      return obj;
    } catch (err) {
      return err;
    }
  },
};

const groupArrayOfObjects = (list, key) => {
  return list.reduce(
    (acc, x) => ((acc[x[key]] = (acc[x[key]] || 0) + 1), acc),
    {}
  );
};
