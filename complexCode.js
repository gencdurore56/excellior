/* 
 * Filename: complexCode.js
 *
 * Description: This complex code demonstrates various advanced concepts in JavaScript
 *              and implements a full-fledged online shopping cart system.
 */

// Import necessary external libraries
import { Cart, Product, User } from './models';

// Create a new instance of the cart
const cart = new Cart();

// Create some sample products
const laptop = new Product("Laptop", 999.99);
const headphones = new Product("Headphones", 149.99);

// Create a new user
const user = new User("John Doe");

// Add products to the cart
cart.addProduct(laptop);
cart.addProduct(headphones, 2);

// Perform operations on the cart
cart.removeProduct(headphones);
cart.updateQuantity(laptop, 2);

// Calculate and display the total price
console.log(`Total price: $${cart.getTotalPrice().toFixed(2)}`);

// Check if the cart is empty
if (cart.isEmpty()) {
  console.log("Cart is empty");
} else {
  console.log("Cart is not empty");
}

// Save the cart in the user's account
user.saveCart(cart);

// Display recently viewed products
console.log("Recently Viewed Products:");
user.getRecentlyViewedProducts().forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}`);
});

// Perform a search for laptops
const searchResults = user.searchProducts("laptop");

// Display search results
console.log("Search Results:");
searchResults.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - $${product.price.toFixed(2)}`);
});

// Apply a discount to the cart
cart.applyDiscount(0.1);

// Calculate and display the discounted price
console.log(`Discounted price: $${cart.getTotalPrice().toFixed(2)}`);

// Process the user's checkout
user.checkout(cart);

// Send order confirmation email to the user
user.sendOrderConfirmationEmail();

// Display user's order history
console.log("Order History:");
user.getOrderHistory().forEach((order, index) => {
  console.log(`${index + 1}. Order ID: ${order.id}`);
  console.log(`   Date: ${order.date}`);
  console.log(`   Total price: $${order.totalPrice.toFixed(2)}`);
  console.log(`   Status: ${order.status}`);
});

// Clear the cart after checkout
cart.clear();

// Remove user's browsing history
user.clearBrowsingHistory();

// Display user's recently viewed products (should be empty now)
console.log("Recently Viewed Products:");
user.getRecentlyViewedProducts().forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}`);
});

// End of code