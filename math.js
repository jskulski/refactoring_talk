// Say we have a function `f` that models a parabola.

// What do we know about the _external behavior_?
// Some examples:
f(-2) == 3;
f(1) == 0;
f(3) == 2;
f(-2) != 9

// What do we know about the _internal structure_?
function f(x) {
  return (x - 1) * (x - 1)
}

// OR
function f1(x) {
  return Math.pow(x, 2) + (x - x) + 1
}

// OR
function f2(x) {
  return Math.pow(x, 2) + 1;
}

// Mathematically we know that f(x) == f1(x) == f2(x) for all x's.
// So we can swap out implementations without anyone knowing.
// Can we have the same confidence in the real world? If we can, is that helpful?
