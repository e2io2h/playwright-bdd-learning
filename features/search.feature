Feature: Google Search

  Scenario: User can search for Playwright
    Given I open the Google homepage
    When I search for "Playwright"
    Then I should see results related to "Playwright"