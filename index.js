// Write your solution in this file!
// helpers.js (Implementations)
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Tests (index.js)
require('./helpers.js');

describe('employees', function() {
  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
    beforeEach(function () {
      for (const key in employee) {
        delete employee[key];
      }
      employee.name = 'Sam';
    });

    it('returns an employee with original key-value pairs and new key-value pair', function () {
      expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))
        .to.eql({ name: 'Sam', streetAddress: '11 Broadway' });
    });

    it('does not modify the original employee', function () {
      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
      expect(employee['streetAddress']).to.equal(undefined);
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('updates employee destructively', function () {
      expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'))
        .to.eql({ name: 'Sam', streetAddress: '12 Broadway' });
      expect(employee).to.eql({ name: 'Sam', streetAddress: '12 Broadway' });
    });
  });

  describe('deleteFromEmployeeByKey(employee, key)', function () {
    it('deletes key non-destructively', function () {
      let newEmployee = deleteFromEmployeeByKey(employee, 'name');
      expect(newEmployee['name']).to.equal(undefined);
      expect(employee['name']).to.equal('Sam');
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('deletes key destructively', function () {
      destructivelyDeleteFromEmployeeByKey(employee, 'name');
      expect(employee['name']).to.equal(undefined);
    });
  });
});
