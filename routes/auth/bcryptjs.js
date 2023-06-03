// Require the bcryptjs library for password hashing
const bcrypt = require('bcryptjs');

/* 
The function hashPassword is used to hash the user's password using bcrypt. 
It takes a plain text password as an argument and returns a Promise that 
resolves with the hashed password.
*/
const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
}

/* 
The function checkPassword is used to compare a user's entered password with the hashed 
password stored in the database. It takes the entered password and the stored hashed password 
as arguments and returns a Promise that resolves with a boolean value indicating whether 
the passwords match.
*/
const checkPassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
}

// Export the hashPassword and checkPassword functions so they can be used in other parts of the application
module.exports = { hashPassword, checkPassword };
