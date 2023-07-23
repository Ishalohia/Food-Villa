import {sum} from "../sum" 

// we dont have to import test or expect , jest already understand it , but in older version we used to import/ export it also  
test("check for two numbers sum ", () => {
        expect(sum(2,5)).toBe(7);   //make a sum call and expect it to be return 7. 
})