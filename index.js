// Write your solution in this file!
const employee = {
    name : 'sam',
    streetAddress : '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;  // Use newEmployee to update the clone, not the original object
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    if (newEmployee.hasOwnProperty(key)) { // Check if the key exists in the object
        delete newEmployee[key];
    }
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

// Test your functions
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
deleteFromEmployeeByKey(employee, 'name');
destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employee);
