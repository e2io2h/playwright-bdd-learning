// Generated from: features\search.feature
import { test } from "playwright-bdd";

test.describe('Google Search', () => {

  test('User can search for Playwright', async ({ Given, When, Then, page }) => { 
    await Given('I open the Google homepage', null, { page }); 
    await When('I search for "Playwright"', null, { page }); 
    await Then('I should see results related to "Playwright"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the Google homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I search for \"Playwright\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Playwright\"","children":[{"start":14,"value":"Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see results related to \"Playwright\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Playwright\"","children":[{"start":33,"value":"Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end