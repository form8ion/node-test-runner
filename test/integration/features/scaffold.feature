Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then a canary test file is created
    And the unit test script is defined
