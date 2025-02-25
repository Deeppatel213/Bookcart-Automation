Feature: Add to Cart

Background:
    Given The user navigates to the website  
    And The user clicks on the login link  

Scenario Outline: Add to Cart Feature  
    Given The user enters a valid username as "<username>"
    And The user enters a valid password as "<password>"
    And The user clicks on the login button
    And The user search for the "<book>"
    When User add the book to cart
    Then the "<book>" Successfully add to the cart.

Examples:
|username|password|book|
|ortoni|Pass1234|Rot & Ruin|
|ortonikc|Pass1234|The Simple Wild|