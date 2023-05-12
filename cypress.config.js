const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.efinancialcareers.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/testsuits/*.js'
  },
});
