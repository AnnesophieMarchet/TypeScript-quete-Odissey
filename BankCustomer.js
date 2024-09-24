"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
// ... Ton code ici ...
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, secretCode) {
        this.name = name;
        this.secretCode = secretCode;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (inputPin) {
        return this.secretCode === inputPin;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer("John Doe", "3579");
console.log(assert.equal(typeof customer.getName, "function", "error1"));
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
