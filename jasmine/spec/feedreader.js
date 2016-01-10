/*global $, describe, it, expect, beforeEach, beforeAll*/
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    
    /* Test Suite: 'RSS Feeds' - is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Spec:'have proper URLs' - checks each feed to ensure that it is defined
         * and that it is properly formed. Orignial requirement is that they aren't = ""
         * RegEx was posted on Stack Overflow:
         * http://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
         */
        it('have proper URLs', function () {
            allFeeds.forEach(function (feed) {
                expect(feed).toBeDefined();
                expect(feed.url).toMatch(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
            });
        });

        /* Spec:'are named' - loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('are named', function () {
            allFeeds.forEach(function (feed) {
                expect(feed).toBeDefined();
                expect(feed.name).toBeTruthy();
            });
        });
    });

    /* Test Suite: 'The Menu' - is a collection of specs that tests the menu functionality.
     */
    describe('The Menu', function () {       

        /* Spec:is hidden by default' - ensures the menu element is
         * hidden by default.
         */
        it('hides by default', function () {
            expect($('body').attr("class")).toMatch('menu-hidden');
        });
      

        /* Spec:'toggles visibility when menu-icon is clicked', both on and off.
         */
        it('toggles visibility when menu-icon is clicked', function () {
            $(".menu-icon-link").click();
            expect($('body').attr("class")).not.toMatch('menu-hidden');


            $(".menu-icon-link").click();
            expect($('body').attr("class")).toMatch('menu-hidden');
        });

    });

    /* Test Suite: 'Initial Entries' - Ensures the feed reader loads properly.
    */
    describe('Initial Entries', function () {       

        /* Call the loadFeed() function, giving it the first feed
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        
        
        /* Spec:'are loaded', - counts the number of entrys in the feed container and
         * and fails if it is not greater than zero.
         */
        it('are loaded', function (done) {
            var count = $(".feed").find(".entry").length;
            expect(count).toBeGreaterThan(0);
            done();
        });
    });


    /* Test Suite: 'New Feed Selection' -  Checks that new content is loaded 
     * when selected from the menu. 
     */
    describe('New Feed Selection', function () {
        var originalHref,
            newHref;

        beforeAll(function (done) {
            loadFeed(0, done);
        });
        
        //get current header title and load new one
        beforeAll(function (done) {
            originalHref = $('.feed').children('a').eq(1).attr("href");
            loadFeed(1, done);
        });

        /* Spec:'changes when new feed loaded', - compares first href in original feed to
         * first href in new feed to ensure we are comparing async loaded values, not hard-coded
         * feed information.
         */
        it('changes when new feed selected', function (done) {
            newHref = $('.feed').children('a').eq(1).attr("href");
            expect(newHref).toBeTruthy();
            expect(newHref).not.toMatch(originalHref);
            done();
        });
        
    });

} ());