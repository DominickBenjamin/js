let accumulator = {};
const category = 'fruits';
const name = 'apple';
const quantity = 3;

accumulator[category] ??= {}; // Si no existe 'fruits', la inicializas
accumulator[category][name] = (accumulator[category][name] || 0) + quantity;
console.log(accumulator);
