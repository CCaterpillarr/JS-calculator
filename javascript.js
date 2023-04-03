// 0123456789 clicked:
// IF on first operand AND on first symbol:
//  -replace current symbol with the number clicked (as a string)
// ELSE:
//  -add the number as a string to the current operator

// operator clicked:
// IF on second operand:
//  -do nothing
// ELSE:
//  -convert first operator to a number and store it as an object property
//  -store the function tied to the given operator as an object property
//  -switch to second operator

// % clicked:
// add "%" to the string
// -block adding .0123456789 to the current operand
// [block incompatible things like + 20%]

// . clicked:
// IF on first operand AND on first symbol:
//  -do nothing
// ELSE:
//  -add "." to the string
//  -block adding . again to the current operand

// = clicked:
// -convert second operator to a number and store it as an object property
// -calculate the given operands and operator (stored as object properties)
// -delete second operand
// -return to first operand
// -set first operand to the result(converted to a string)

// C clicked:
// -delete second operand
// -return to first operand
// -set first operand to 0

// length limit