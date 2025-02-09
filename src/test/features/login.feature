Feature: User Login Tests  

Background:  
    Given The user navigates to the website  
    And The user clicks on the login link  

Scenario: Successful login  
    Given The user enters a valid username
    And The user enters a valid password
    And The user clicks on the login button
    Then The user should be successfully logged in