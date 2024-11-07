# Memoize

[LeetCode problem: Memoize](https://leetcode.com/problems/memoize/)

## Problem Description

Implement a function that takes another function as input and returns a memoized version of that function. The memoized version should cache its results, so repeated calls with the same inputs return the cached value instead of recalculating.

## What I Learned

### Memoization Fundamentals:

- Memoization is an optimization technique that stores expensive function call results
- It trades memory for speed by caching computed values
- Perfect for pure functions where same inputs always produce same outputs


### Cache Key Generation:

- Converting function arguments to a cache key is crucial
- For sum function, order matters (3,2) ≠ (2,3)
- Can use JSON.stringify or array join for creating unique keys