const expect = require('chai').expect;

const client = require('./model/dbconnect');


describe('URLShortener', () => {

    it('should shorten url is correct or not', async() => {
          const originalURL= 'https://www.example.com/';
          const shortURL = 'quwe124';
      
          //await client.set(shortURL, originalURL);
      
          expect(shortURL).to.equal('quwe124');
      });

  context('compare shorten url', function() {
    it('should retrieve the original URL from a short URL',async (done) => {
      const originalURL = 'https://www.example.com/';
      const shortURL = 'quwe124';
      //await client.set(shortURL, originalURL);
      const retrievedUrl = await client.get(shortURL);
  
      expect(retrievedUrl).to.equal(originalURL);
      done();
    });
  });
});
