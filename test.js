const {
  capitalize,
  reverse,
  countWords,
  slugify,
  truncate
} = require('./index');

// capitalize
console.log('capitalize("hello world"):', capitalize("hello world"));
console.log('capitalize("iPhone"):', capitalize("iPhone"));
console.log('capitalize("hELLO WORLD", true):', capitalize("hELLO WORLD", true));
console.log('capitalize(""):', capitalize(""));

// reverse
console.log('reverse("hello world"):', reverse("hello world"));
console.log('reverse("rocket 🚀"):', reverse("rocket 🚀"));
console.log('reverse("racecar"):', reverse("racecar"));
console.log('reverse(""):', reverse(""));

// countWords
console.log('countWords("hello world"):', countWords("hello world"));
console.log('countWords("  multiple   spaces  and\ttabs  "):', countWords("  multiple   spaces  and\ttabs  "));
console.log('countWords("   "):', countWords("   "));
console.log('countWords(""):', countWords(""));

// slugify
console.log('slugify("Hello World!"):', slugify("Hello World!"));
console.log('slugify("Crème Brûlée & Café"):', slugify("Crème Brûlée & Café"));
console.log('slugify("What?! Is this 100% real?"):', slugify("What?! Is this 100% real?"));
console.log('slugify("---hello---world---"):', slugify("---hello---world---"));

// truncate
console.log('truncate("Hello World", 20):', truncate("Hello World", 20));
console.log('truncate("Hello, World! Welcome to JS.", 15):', truncate("Hello, World! Welcome to JS.", 15));
console.log('truncate("Long description goes here", 12, ".."):', truncate("Long description goes here", 12, ".."));
console.log('truncate("", 10):', truncate("", 10));