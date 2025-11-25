// test.js
const assert = require('assert');
const sum = require('./sum');

// Простой тест
try {
  assert.strictEqual(sum(2, 3), 5);
  console.log('✅ Тест пройден: 2 + 3 = 5');
} catch (err) {
  console.error('❌ Тест провален:', err.message);
  process.exit(1); // Код выхода != 0 → ошибка
}

// Можно добавить больше тестов
try {
  assert.strictEqual(sum(-1, 1), 0);
  console.log('✅ Тест пройден: -1 + 1 = 0');
} catch (err) {
  console.error('❌ Тест провален:', err.message);
  process.exit(1);
}
