"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require('../../src/practice_3.js');
var Student = require('../../src/practice_3.js');
var expect = chai.expect;
chai.use(sinonChai);

describe("jicehng", function() {
    var person = new Person("Bob", 21);
    var student = new Student(2);
    describe("Person", function () {
        it("#introduce", function () {

            it('have name and age', function () {
                //var person = new Person("Bob", 21);
                expect(person.age).equal(21);
                expect(person.name).equal('Bob');
            });
            it('can return a "string"', function () {
                //var person = new Person("Bob", 21);
                var result = person.introduce();
                expect(result).equal('My name is Bob. I am 21 years old.');

            });
        });
    });
    describe("Student", function () {
        it("#introduce", function () {

            it('have name and age and class', function () {

                //var student = new Student("Bob", 21,2);
                expect(student.age).equal(21);
                expect(student.name).equal('Bob');
                expect(student.klass).equals(2);
            });
            it('can return a "string"', function () {
                //var student = new Student("Bob", 21,2);
                var result = student.introduce();
                expect(result).equal('I am a Student. I am at Class 2.');

            });
        });
    });
});