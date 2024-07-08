import { sum } from "../sum"



test("Sum of 2 numbers",()=>{
   const result = sum(2,5);

   //Assertion
   expect(result).toBe(7);

})