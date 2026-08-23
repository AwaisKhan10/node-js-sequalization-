// Seed / reference data files for development purposes only 


module.exports = {
    up: async (queryInterface) =>
    queryInterface.bulkInsert("roles", [{ title: "admin" }, { title: "user" }]),
    down: async (queryInterface) =>
    queryInterface.bulkDelete("roles", null, {}),
    };