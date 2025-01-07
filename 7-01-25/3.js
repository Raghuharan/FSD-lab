function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
}

const employee = { name: 'Afroz', role: 'Developer', age: 28, location: 'IN' };
console.log(updateEmployeeDetails(employee, 'Senior Developer'));
