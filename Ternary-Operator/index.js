// Ternary Operation ក្នុង​ javascript is a concise and straightforward way to perform conditional logic

// if else logic
const isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome May");
} else {
  console.log("Login first May");
}
// USE Ternary instead if else
const userLoggedIn = true;
const message = userLoggedIn ? "Welcome Back May" : "Login First May";
console.log(message);

// get discount function used ternary for loic condition
const discount = (price, percent = 0) => {
  if (typeof price !== "number" || price <= 0) {
    // check price is number and more than 0
    console.log("Price is valid");
    return; // exist function
  }
  const total = price - (price * percent) / 100; // find total price
  // Used Ternary operation
  const message = percent
    ? `You get discount ${percent}% total: ${total}$`
    : `No discount Total: ${total}$`; // check if percent not eqaul 0 message get discount else eqaul 0 as default message No discount
  console.log(message);
};
// Default Price no value Discount 0% as default
discount(); // Total: NaN$
// Price 12$, Discount 10%
discount(12, 10); // You get discount 10% total: 10.8$
// Price 50$ Discount 0%
discount(50, 0); // No discount Total: 50$
// Price 100$ Discount 0%
discount(100); // No discount Total: 100$
