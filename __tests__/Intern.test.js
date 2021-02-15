const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern', ()=>{
    const intern = new Intern ('James Smith', '289', 'jsmith@gmail.com', 'University of Texas at Austin');
    
    expect(intern.name).toBe('James Smith');
    expect(intern.id).toBe('289');
    expect(intern.email).toBe('jsmith@gmail.com');
    expect(intern.school).toBe('University of Texas at Austin')
});

test('intern school',()=>{
    const intern = new Intern ('James Smith', '289', 'jsmith@gmail.com', 'University of Texas at Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining('University of Texas at Austin'));
});

test('gets intern role',()=>{
    const intern = new Intern ('James Smith', '289', 'jsmith@gmail.com', 'University of Texas at Austin');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
});