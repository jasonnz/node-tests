const utils = require('./utils');
const expect = require('expect');

it('Should add to numbers', ()=> {
    var result = utils.add(10,15);
    
    expect(result)
        .toBeA('number')
        .toBe(25);
});

it('Should async add to numbers', (done)=> {
    utils.asyncAdd(15, 10, (sum) => {
        expect(sum)
            .toBeA('number')
            .toBe(25);
        done();
    });
});

it('Should square a number', ()=> {
    var result = utils.square(5);
    // throw new Error('Value not correct');
    expect(result)
        .toBeA('number')
        .toBe(25);
});

it('Should async square a number', (done)=> {
    utils.asyncSquare(10, (sum) => {
        expect(sum)
            .toBeA('number')
            .toBe(100);
        done();
    });
});

// it('Should expect some values', ()=> {
//     // expect(12).toNotBe(3);
//     // expect({name: 'Jason'}).toEqual({name: 'Jason'});
//     // expect([1,2,3,4]).toExclude(5);
//     // expect({name: 'Jason', age: 37, location: 'Porirua'}).toInclude({
//     //     age: 37,
//     //     name: 'Jason'
//     // })
// });

it('Should verify first and last names are set', ()=> {
    var user = {
        // firstName: '',
        // lastName: ''
    }
    var result = utils.setName(user, 'Jason Marshall');
    expect(result)
        .toInclude({firstName: 'Jason'})
        .toInclude({lastName: 'Marshall'})
});
