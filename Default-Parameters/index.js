function greet(name = 'Guest', greeting = `Hello, ${name}!` ){
    console.log(greeting)
}
greet();                    // Hello, Guest!
greet('Alice')              // Hello, Alice!
greet('Dara', 'Hi, Dara!')  // Hi, Dara!

// Arrow Function ES6
const greetGuess= (guest = 'Guest', greeting = `Welcome, ${guest} to our party!`) => {
    console.log(greeting);
}

greetGuess()        // Welcome, Guess to our party!
greetGuess("Kanha") // Welcome, Kanha to our party!

const discount = (price, percent= 0 ) => {
    const discountPrice = price * percent / 100
    const total = price - discountPrice
    const message = `You get discount ${percent}% total: ${total}$`
    console.log(message);
}
// Default Price no value Discount 0% as default
discount()      // You get discount 0% total: NaN$
// Price 12$, Discount 10%
discount(12,10) // You get discount 10% total: 10.8$
// Price 50$ Discount 0%
discount(50,0)  // You get discount 0% total: 50$
// Price 100$ Discount 0%
discount(100)   // You get discount 0% total: 100$