var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:80' , function(error, response, body) {
        expect(body).to.equal('Welcome to IBM Cloud DevOps using containers. Let\'s go use the Continuous Delivery Service');
        done();
    });
});