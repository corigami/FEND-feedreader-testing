# FEND-feedreeder-testing
Project 5 for Udacity Frontend Nanodegree program
=================================================
This project shows testing being performed using the Jasmine Test Framework.  It also show cases Test Driven Development by writing some test cases before implementation. Tests can be found in the '/jasmine/spec' folder. 

1 - Running the application 
---------------------------------
Simply download/clone the repo and open index.html in a browser to get started. 

2 - Current Function Tests 
---------------------------------
Includes test suites for the following:

a) RSS Feeds - Tests that feeds are defined, named and that they have proper urls (using regex).

b) The Menu -  Checks that Menu opens and closes properly and that it is hidden by default

c) Initial Entries - Tests to see that RSS feeds load asyncronously and that the display changes when a user selects a different feed.

    
3 - Future Capabily 
---------------------------------
Tests included for planned implementations.

a) Modify Feeds - Tests that check to see that functions work to add, get, and delete feeds. This test suite can be turned off by changing the "describe('Modify Feeds')" function to "xdescribe(...)"
    