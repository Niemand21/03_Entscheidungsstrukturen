// Entscheidungsstrukturen | control flow --> If / Else 

// Deklaration (Konstante) + Assigment (Wertzuweisung)
const ageJohnDoe = 30; 
const ageJaneDoe = 30; 

// Deklaration (Variable)
let isJohnDoeOlder, isJohnDoeEqual; 

// Test | Logische Aussage
isJohnDoeOlder = (ageJohnDoe > ageJaneDoe);
isJohnDoeEqual = (ageJohnDoe == ageJaneDoe); // == --> Sind Werte gleich?

// // Ausgabe
// console.log(ageJohnDoe);
// console.log("Ist John Doe älter? --> " + isJohnDoeOlder);
// console.log("Ist John Doe gleich alt? --> " + isJohnDoeEqual);

/*************  IF  ***************/
// TINA --> There is no alternative!
// entweder Ja oder nichts ... alternativlos

// if (true) / if (fales) // {} = Codeblock, () = Bedingung
// if (JohnDoeOlder) = Variabel
// if(isJohnDoeOlder)
// { 
//     console.log("John Doe ist älter.");
// }

/**************  IF - ELSE  **************/
// mit Alternative
// entweder ja oder nein

// if (isJohnDoeOlder) 
// {
    
//         // Ja-Zweig / true
//         console.log("John Doe ist älter.");

// } 
// else 
// {

//         // Nein-Zweig / fales
//          console.log("John Doe ist jünger.");

// }

/************** Ternäre (ternary) Schreibweise ***************/
// console.log( (isJohnDoeOlder) ? "John is older" : "Jane is older");

/************** IF - ELSE IF - ELSE ***************/
// mit alternativen Fällen (älter, jpnger, gleich alt)

if (isJohnDoeOlder) 
{   
        console.log("John Doe ist älter.");
} 
// 1. Alternative
else if(isJohnDoeEqual)
{               
        console.log("John und Jane sind gleich alt");
}
// 2...n Alternative(n)
        /*       
        /*       
        /*/
// Alternative wenn alles nicht zutrifft --> last result. 
else 
{
         console.log("John Doe ist jünger.");
}

