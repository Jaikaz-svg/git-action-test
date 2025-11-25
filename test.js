import { helloWorld, add } from './hello.js';

// Простейшие тесты
console.log("🧪 Running elementary tests...");

// Тест 1: helloWorld
const result1 = helloWorld();
if (result1 === "Hello, World!") {
  console.log("✅ helloWorld test PASSED");
} else {
  console.log("❌ helloWorld test FAILED");
  process.exit(1);
}

// Тест 2: add function
const result2 = add(2, 3);
if (result2 === 5) {
  console.log("✅ add test PASSED");
} else {
  console.log("❌ add test FAILED");
  process.exit(1);
}

console.log("🎉 All tests passed! GitHub Actions should work!");
