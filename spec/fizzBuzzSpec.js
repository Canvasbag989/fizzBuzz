
describe("FizzBuzz", function() {
    it("print numbers one to one hundred", function(){
        expect(num[1]).toBeGreaterThan(0);
        expect(num[99]).toBeLessThan(101);
    })

   it("prints fizz if the number is divisble by 3", function(){
     expect(num[2]).toEqual('fizz')
   })
})
