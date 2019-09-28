// Operadores unários

/* --------------------

Operator	            Explanation
Unary plus (+)	        Tries to convert the operand into a number
*Unary negation (-) *	Tries to convert the operand into a number and negates after
Logical Not (!)	        Converts to boolean value then negates it
Increment (++)	        Adds one to its operand
Decrement (--)	        Decrements by one from its operand
Bitwise not (~)	        Inverts all the bits in the operand and returns a number
typeof	                Returns a string which is the type of the operand
delete 	                Deletes specific index of an array or specific property of an object
void	                Discards a return value of an expression.

----------------------*/

let num1 = 0;
let num2 = 2;

num1++; console.log(num1);
--num1; console.log(num1);

// Obs.: O operador unário incremento e decremento tem ordem de precedencia 
// diferente quando é executado prefixado.
console.log(++num1 === num2--); 
console.log(num1 === num2);