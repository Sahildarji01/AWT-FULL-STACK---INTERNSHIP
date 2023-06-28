
// global method number can convert string to number

document.write("<br/>"+Number("3.1478"));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number("99 88"));

let num=111;
let s =String(100+33)
document.write("<br/>"+String(num));
document.write("<br/>"+String(123));
document.write("<br/>"+String(s+100+33));
document.write("<br/>"+String(num));

// 
document.write("<br/>"+num.toString());
document.write("<br/>"+String(num+num.toString()));

// toExponentia method return rounded number
let numexp= 3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));

// toFixed method return specified number
let numfixed=3.14;
document.write("<br/>"+numfixed.toFixed(1));
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>"+numfixed.toFixed(6));


// toprecision method return specified length 
let numprec=3.14;
document.write("<br/>"+numprec.toPrecision(1));
document.write("<br/>"+numprec.toPrecision(2));
document.write("<br/>"+numprec.toPrecision(4));
document.write("<br/>"+numprec.toPrecision(6));


document.write("<br/>"+Number.MAX_VALUE);

document.write("<br/>"+Number.MIN_VALUE);


document.write("<br/>"+Number.POSITIVE_INFINITY);

document.write("<br/>"+Number.NEGATIVE_INFINITY);

document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("years is: 10"));

// 
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("years is: 10"));

// DATE= year,month,day,hours,minutes,seconds,milliseconds
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018,11,24,10,33,30,0));
document.write("<br/>"+new Date("october 13,2014 11:33:00"));








