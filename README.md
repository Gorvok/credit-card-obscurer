# Credit Card Obscurer

This project is a simple Node.js application that obscures a credit card number, leaving only the last four digits visible. The project is built using Test Driven Development (TDD) with Jest for unit testing.

## Features

- Obscures credit card numbers between 12 and 16 digits.
- Returns `"Invalid Credit Card"` for numbers that are less than 12 or more than 16 digits.
- Uses TDD with Jest for writing and running unit tests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gorvok/credit-card-obscurer.git

2. Navigate to the project directory:

    ```bash
    cd credit-card-obscurer
   ```
   
3. Install dependencies:

    ```bash
    npm install
   ```
   
## Usage
You can test the function by running the Jest tests:
     ```bash
     npm test
     ```
You can modify or use the obscureCreditCard function located in creditCardObscurer.js.
