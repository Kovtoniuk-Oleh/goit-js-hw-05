'use strict';

function isEnoughCapacity(products, containerSize) {
  // Знаходимо загальну кількість товарів
  const totalItems = Object.values(products).reduce((sum, quantity) => sum + quantity, 0);
  
  // Повертаємо true, якщо товари поміщаються в контейнер
  return totalItems <= containerSize;
}

// Приклад використання:
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
