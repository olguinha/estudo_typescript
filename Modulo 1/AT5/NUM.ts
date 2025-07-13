// Exemplos: number

let num1: number = 23.0 ;
let num2: number = 0x78CF;
let num3: number =  0o577;
let num4: number = 0b110001;


console.log('Number - Ponto Flutuante...:', num1);
console.log('Number - Ponto Hexadecimal...:', num2);
console.log(typeof(num2));
console.log('Number - Ponto Octal...:', num3);
console.log(typeof(num3));
console.log('Number - Ponto Binario...:', num4);


// exemplo 2: de number
let num5:number = 3.14;
let num6:number = 0o77;
let num7:number = 0XFF;
let num8:number = 0b1010;

console.log (num5);
console.log (num6);
console.log (num7);
console.log (num8);

//Exemplos 1: bigInt

let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x2000000000003n;
let big4: bigint = 0o40000000000000003n;


console.log('Bigint...: -', big1);
console.log('Bigint...: - Binario', big2);
console.log('Bigint...: - Hexadecimal', big3);
console.log('Bigint...: - Octal', big4);


// Exemplos 2: BIDTNT

let big5: bigint = 0x1AFn;
let big6: bigint = 0o755n;
let big7: bigint = 0b101010n ;
let big8: bigint = 0o4000000003n;

console.log(big5);
console.log(big6);
console.log(big7);
console.log(big8);