console.log('js')
console.log(console)

//value and variables ;
//data-types ;
//note datatypes
//note PRIMITIVE 
//string
//Number
//Boolean
//NULL
//UNDEFINED
//BigInt
//Symbol

//Note non-premitive
//array=[]
//object={}



//STRING
//variable declaration
//always use camelCase;

let firstName = 'diya';
console.log(firstName)


console.log(typeof firstName);

//Note Number Type
let age='20'
console.log(typeof age)

//Note Boolean Type

let isJsFun = true;
console.log(typeof isJsFun)

//Note UNDEFINED ;
//Note when you have declare the variable but not assign a value in it
let college;
console.log(typeof college)
console.log(typeof college)

//NOTE NULL ;
let department  = null;
console.log(typeof department);

//TODO -KEYWORDS USED TO DECLARE THE VARIABLES;

//NOTE VAR < LET < CONST

//NOTE - VAR
        // console.log(console)
//NOTE In the case var we can ✅redeclare and ✅reassign the variable
var lastName = 'Sharma';
lastName = 'Jain';
console.log(lastName)

//REVIEW - REDECLARE;
var fruit = 'mango';
console.log(fruit)
var fruit = 'grapes';
console.log(fruit)


//NOTE LET
//NOte ✅reassign ❌redeclare;
let company = 'meta';
company = 'netflix';
console.log(company)

//NOTE CONST
//NOTE ❌reassign ❌redeclare
// const pencil = 'apsara';
// pencil = 'doms'


//NOTE ARITHMETIC(+,-,*,%,/,**)

//NOTE ASSIGNMENT(=,+=,-=,*=,/=)

x = 5;
//x =+5
x+=5 //equivalent(x=x+5)
console.log(x)

//NOTE COMPARISION(==, ===, != , !==,>,< , <= , >=);
//MOTE LOOSE EQUALITY (==);
const a=5;
const b='5';
//NOTE LOOSE EQUALITY
//❌always avoid to use
console.log(a==b);

//NOTE STRICT EQUALITY
console.log(a===b);

//note !=
console.log(5 != '5');  //❌loose not equality
console.log(5 !== '5');  //✅stict not equality

//NOTE LOGICAL(||, && ,!)
//prompt , alert

// alert('hello')
const firstNamee = prompt("Enter your name")
console.log('firstNamee')

username='admin'
password = 'admin123'

//NOTE create two prompt one for username and other for password, use && logical operator to check if the username === 'admin' and password === 'admin123' , it both conditions are true then print console.log("authentication'successful') else console.log ('authentication failed)

//NOTE TYPE COERSION AND TYPE CONVERSION ;

//NOTE IMPLICIT (TYPE COERSION) when javascript internally convert the type of variable from one datatype to another;
 
const set = 3+'3';
console.log(typeof c);

const bol = true +1;
console.log(bol)
console.log(typeof bol)


const d = +'5';
console.log(d)
console.log(typeof d)

//nNOTE TYPE OF CONVERSION
const num =5;
console.log(typeof String(num))

const str = 'true';
console.log(typeof Boolean(str))