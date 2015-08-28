/**
 * Created by danaekola on 28/08/15.
 */

"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require('../../src/practice_1.js');
var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function() {
    it("#introduce", function () {

        it('have name and age',function(){
            var person = new Person("Bob", 21);
            expect(person.age).equal(21);
            expect(person.name).equal('Bob');
        });
        it('can return a "string"', function () {
            var person = new Person("Bob", 21);
            var result = person.introduce();
            expect(result).equal('My name is Bob. I am 21 years old.');

        });
    });
});