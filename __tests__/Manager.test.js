const Manager = require('../lib/Manager');

test('creates a manager object',()=>{
    const manager = new Manager('Alan Montes', '967', 'alanm@gmail.com', 'BC234')

    expect(manager.name).toBe('Alan Montes');
    expect(manager.id).toBe('967');
    expect(manager.email).toBe('alanm@gmail.com');
    expect(manager.office).toBe('BC234');
});

test('employee role', ()=>{
    const intern = new Intern ('James Smith', '289', 'jsmith@gmail.com', 'University of Texas at Austin');

    expect(manager.getRole()).toEqual(expect.stringContaining(' Team Manager'));
})