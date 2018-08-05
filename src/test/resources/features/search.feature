Feature: Search
  This is to test Search field

  Scenario: Search on Firefox
    Given I navigate to bbc homepage
    When I click on search box
    And I enter text
    And I Click on the search button
    Then I should see world cup information