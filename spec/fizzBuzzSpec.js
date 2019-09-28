describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multi of 3', function() {
    it('returns Fizz', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('returns Fizz', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multi of 5', function() {
    it('returns Buzz', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('returns Buzz', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multi of 3 and 5', function() {
    it('returns FizzBuzz', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it('returns FizzBuzz', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('other numbers', function() {
    it('returns number', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('returns number', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});