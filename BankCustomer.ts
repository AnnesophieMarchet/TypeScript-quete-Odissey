import * as assert from "assert";

// ... Ton code ici ...
class BankCustomer {
  private name: string;
  private secretCode: string;

  constructor(name: string, secretCode: string) {
    this.name = name;
    this.secretCode = secretCode;
  }

  public getName(): string {
    return this.name;
  }

  public verifyPinInput(inputPin: string): boolean {
    return this.secretCode === inputPin;
  }
}
// Tests

const customer = new BankCustomer("John Doe", "3579");
assert.equal(typeof customer.getName, "function", "error1");
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
