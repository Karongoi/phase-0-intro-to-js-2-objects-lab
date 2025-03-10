// Step 1: Initialize the employee object
const employee = {
  name: "Alice",
  streetAddress: "123 Main St"
};

// Step 2: Non-destructive update function
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };  // Returns a new object with the updated key-value pair
}

// Step 3: Destructive update function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;  // Modifies the original object
  return employee;
}

// Step 4: Non-destructive delete function
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };  // Creates a copy of the object
  delete newEmployee[key];  // Deletes the key from the new object
  return newEmployee;
}

// Step 5: Destructive delete function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];  // Modifies the original object
  return employee;
}

// Exporting functions for testing (if required)
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};
