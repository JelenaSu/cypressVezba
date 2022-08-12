const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      validLoginEmail: "danilo.todorovic@vivifyideas.com",
      validLoginPassword: "test1234"
    },
    baseUrl: "https://gallery-app.vivifyideas.com",
    watchForFileChanges: false
  },
});
