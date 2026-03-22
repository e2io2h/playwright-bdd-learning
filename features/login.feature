Feature: Login

  Scenario: User can log in with valid credentials
    Given I open the login page
    When I log in as "tomsmith" with password "SuperSecretPassword!"
    Then I should see the secure area