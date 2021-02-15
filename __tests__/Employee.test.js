const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Jose Ramirez' , '111', 'jose.ram.18@gmail.com');

    expect(employee.name).toBe('Jose Ramirez');
    expect(employee.id).toBe('111');
    expect(employee.email).toBe('jose.ram.18@gmail.com');
})

test('inputs employee name',()=>{
    const employee = new Employee('Jose Ramirez' , '111', 'jose.ram.18@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));

})

test('inputs employee Id', ()=>{
    const employee = new Employee('Jose Ramirez' , '111', 'jose.ram.18@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
})

test('inputs employee Email', ()=>{
    const employee = new Employee('Jose Ramirez' , '111', 'jose.ram.18@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('inputs employee role', ()=>{
    const employee = new Employee('Jose Ramirez' , '111', 'jose.ram.18@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})