const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Jason', 37);

        expect(spy).toHaveBeenCalledWith('Jason', 37);
    });

    it('should call save user with User object', () => {
        var email = 'jburhs@burgs.com';
        var password = '123abc';
        app.handleSigup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

})