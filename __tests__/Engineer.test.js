const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Engineer = require('../lib/Engineer');

test('creates an Engineer',()=>{
    const engineer = new Engineer ('Jose Ramirez', '565', 'jose.ram.18@gmail.com', 'pepermz');

    expect(engineer.name).toBe('Jose Ramirez');
    expect(engineer.id).toBe('565');
    expect(engineer.email).toBe('jose.ram.18@gmail.com');
    expect(engineer.github).toBe('pepermz');
})

test('engineer role',()=>{
    const engineer = new Engineer('Jose Ramirez', '565', 'jose.ram.18@gmail.com', 'pepermz');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('pepermz'))
})