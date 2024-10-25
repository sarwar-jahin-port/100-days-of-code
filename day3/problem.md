# Array Reducer Implementation without Built-in Reduce

[LeetCode problem: Array Prototype Last](https://leetcode.com/problems/array-reduce-transformation/description/).

## Problem Description

Implement a function that behaves like the Array.reduce() method without using the built-in implementation. The function should:

- Take an array nums, a reducer function fn, and an initial value init
- Process each element sequentially using the reducer function
- Pass the result of each calculation to the next iteration
- Return the final accumulated value

## What I learned

## Reducer Pattern Understanding

- Gained deeper insight into how reduce operations work under the hood
- Understood the importance of maintaining state between iterations

## Function as Parameters

- Learned about passing functions as arguments (Higher-Order Functions)
- Understanding how callback functions can manipulate data iteratively

## Initialization Handling

- The importance of proper initialization in recursive or iterative operations
- How to handle edge cases like empty arrays

## Manual Implementation Benefits

- Building the reducer manually helped understand the internal workings of `Array.reduce()`
- Appreciation for built-in methods while understanding their mechanics
