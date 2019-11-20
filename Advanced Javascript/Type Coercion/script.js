// Type Coercion happens when there is "==" :  
// == : will coerce two elements on the left and right to the same type
// === : compare two values but be explicit in the comparison


1 == '1' // True
1 === '1' // false

-0 === + 0 // True
Object.is(-0, +0) //False
