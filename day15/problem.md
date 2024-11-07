# Timeout Cancellation

[LeetCode problem: Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation/)

## Problem Description

Given a function, array of args and a timeout t. I need to return a cancel function cancelFn.
Basically the idea was the fn function will not executed if the cancelFn invoked before the fn call.

## What I learned

### 1. Timer Management in JavaScript:

- Understanding setTimeout and its return value
- How to clear timeouts using clearTimeout

### 2. Race Conditions and Timing:

- The importance of storing the timeout ID
- How cancellation works with respect to timing
- Understanding the event loop and timer execution

### 3. Closure Usage:

- Using closures to maintain access to the timeout ID
- Preserving scope for the cancel function
- Managing state between function calls


### 4. Best Practices:

- Always store timeout IDs for potential cancellation
- Clear timeouts to prevent memory leaks
- Consider using clearTimeout even if the timeout might have executed
- Properly handle the function context with apply or arrow functions

### 5. Real-world applications include:

- Debouncing user input
- Implementing cancellable API calls
- Managing animation timeouts
- Building auto-save features
- Implementing feature timeouts