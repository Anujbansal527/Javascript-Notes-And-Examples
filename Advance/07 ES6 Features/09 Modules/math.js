// 📦 math.js – Exporting utilities

// Named export
export const PI = 3.14159;
export const square = x => x * x;

export function add(a, b) {
  return a + b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}