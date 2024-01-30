const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Calculator = require('../../model/calculator');


Given("I have a calculator", () => {
  this.calculator = new Calculator();
});


When("I add {int} and {int}", (x, y) => {
  this.sum = this.calculator.add(x, y);
});


Then("The calculator returns {int}", function(sum) {
  this.epic("Cucumber");
  this.feature("Calculator");
  this.story("Addition");
  this.parentSuite("Cucumber");
  this.suite("Calculator");
  var sample_json = { "message": "Hello" };
  this.attach(sample_json, "application/json");
  var sample_xml = "<message>Hello</message>";
  this.attach(sample_txt, "text/xml");
  assert.equal(this.sum, sum);
});
