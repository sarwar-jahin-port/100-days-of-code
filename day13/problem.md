# Allow One Function Call

[LeetCode problem: Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/)

## Problem Description

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

## What I Learned

### The Apply Method:

- apply is a function method that calls a function with a given this value and arguments provided as an array
- Syntax: fn.apply(thisArg, [argsArray])

### Condition Checking for Function Calls

used a boolean variable outside the return function as false. Then once called changed the value true. 