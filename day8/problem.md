# Fibonacci Generator Implementation

[LeetCode problem: Function Generator](https://leetcode.com/problems/generate-fibonacci-sequence/description/)

## Problem Description

Implement a generator function that returns a generator object which yields the Fibonacci sequence. The solution should:

- Define a generator function to produce Fibonacci numbers.
- Use the relation \( X_n = X_{n-1} + X_{n-2} \) to generate the sequence.
- Yield the first few numbers of the series: 0, 1, 1, 2, 3, 5, 8, 13.
- Allow the generator to continue producing numbers indefinitely as requested.

## What I Learned

### Iterators and Generators

- Understanding the concept of iterators in JavaScript.
- Implementing generator functions using the `function*` syntax.
- Utilizing the `yield` keyword to produce values one at a time.

### Fibonacci Sequence Logic

- Recognizing the recursive nature of the Fibonacci sequence.
- Implementing an efficient way to generate the sequence using iteration.
- Managing state within the generator function to track previous values.

### Real-World Applications

- Lazy evaluation for performance optimization.
- Generating infinite sequences in mathematical computations.
- Implementing stateful iterators for data streaming.
- Simplifying code for sequences and series generation.