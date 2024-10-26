# Function Debouncing Implementation

[LeetCode problem: Debounce](https://leetcode.com/problems/debounce/description/).

## Problem Description

Implement a debounce function that delays the execution of a given function and cancels it if called again within the delay window. The function should:

- Take a function fn and a time in milliseconds t as parameters
- Return a debounced version of the function
- Cancel pending executions if called again within t milliseconds
- Execute the function after t milliseconds of the last call
- Preserve and pass all parameters to the original function

## What I Learned

## Timing Control in JavaScript

- Deep dive into setTimeout and clearTimeout mechanics
- Understanding the JavaScript event loop and timing
- How to handle multiple async operations efficiently

## Function Parameters and Context

- Importance of preserving the original function's context (this)
- How to properly pass arguments through debounced functions
- Managing function parameters in higher-order functions

## Real-World Applications

- Search input optimization
- Window resize event handling
- API call rate limiting
- Scroll event optimization