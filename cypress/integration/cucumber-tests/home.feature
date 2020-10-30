Feature: Verify the homepage widgets

    As a user
    I want to visit the goodlard website
    So I can verify the widgets

    Scenario: Visit the homepage
        Given I have navigated to the homepage
        And I have accepted the cookies
        Then I can see the company logo 
        And I can see the Book a Demo button
        When I click the Book a Demo link
        Then a modal dialogue is displayed
        And I enter my first name
        And I enter my last name
        #And I select No, I am a tenant



