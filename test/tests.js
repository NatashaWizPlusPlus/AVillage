var Nightmare = require("nightmare");
var should = require("chai").should();
var expect = require("chai").expect;


describe("AVillage", function () {

    var nightmare = Nightmare({ show: true });
    var modal1 = "#modallink1";
    var event1 = "#fulleventpage1";

    this.timeout(30000);
    it("should open open a modal and then an event page", function (done) {

        nightmare
            .goto('http://localhost:3000/')
            .wait(modal1)
            .click(modal1)
            .click(event1)
            .evaluate(function () {
                return document.title;
            })
            .then(function (title) {
                title.should.equal("Event 4");
                done();
            });
    });
});