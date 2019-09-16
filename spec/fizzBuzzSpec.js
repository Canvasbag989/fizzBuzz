
describe("FizzBuzz", function() {
    it("print numbers one to one hundred", function(){
        expect(num[1]).toBeGreaterThan(0);
        expect(num[97]).toBeLessThan(101);
    })

   it("prints fizz if the number is divisble by 3", function(){
     expect(num[2]).toEqual('fizz')
   })
   it("prints buzz if the number is divisble by 5", function(){
     expect(num[4]).toEqual('buzz')
   })

   it("prints fizzbuzz if the number is divisble by 3 and 5", function(){
     expect(num[14]).toEqual('fizzbuzz')
   })
})
