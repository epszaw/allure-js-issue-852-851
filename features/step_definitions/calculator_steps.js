const assert = require('assert');
const { Given, When, Then, setWorldConstructor } = require('@cucumber/cucumber');
const { CucumberAllureWorld } = require("allure-cucumberjs")
const Calculator = require('../../model/calculator');

setWorldConstructor(CucumberAllureWorld)

Given("I have a calculator", function() {
  this.calculator = new Calculator();
});


When("I add {int} and {int}", function(x, y) {
  this.sum = this.calculator.add(x, y);
});


Then("The calculator returns {int}", function(sum) {
  this.epic("Cucumber");
  this.feature("Calculator");
  this.story("Addition");
  this.parentSuite("Cucumber");
  this.suite("Calculator");
  var sample_json = { "message": "Hello" };
  this.attach(JSON.stringify(sample_json), "application/json");
  var sample_xml = "<message>Hello</message>";
  this.attach(sample_xml, "text/xml");
  assert.equal(this.sum, sum);
});
