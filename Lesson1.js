'number' + 23 + 32 // number2332 -> string
41 + 1 + 'number'  // 42number -> string
null + 1 // 1 -> number
'five' + + 'two' // fiveNaN -> string
2 && 7 // 7 -> number
+'40' + +'2'; // 42 -> number
'10' - 5 === 6; // false -> boolean
true + false // 1 -> number
'4px' - 3 // NaN -> number
'4' - 3 // 1 -> number
'2' + 3 ** 2; // 29 -> number
12 / '6' // 2 -> number
23 + 42 + 'number' // 65number -> string
'10' + (5 === 6); // 10false -> string
'number' + 15 + 3 // number153 -> string
undefined + 1; // NaN -> number
'true' == true // false -> boolean
false == 'false' // false -> boolean
null == '' // false -> boolean
3 ** (9 / 3); // 27 -> number
!!'false' == !!'true' // true -> boolean
0 || '0' && 1 // 1 -> number
1 < 2 < 3 // true -> boolean
'foo'+ + +'bar' // fooNaN -> string
3 ** 2 / 3; // 3 -> number
1 < 2 > 3 // false -> boolean
(+null == false) < 1; // false -> boolean
false && true || true // true -> boolean
false && (true || true); // false -> boolean
(+null == false) < 1 ** 5; // false -> boolean
