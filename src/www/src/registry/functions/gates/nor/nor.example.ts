import or from ".";

console.log(or(true, true));
// Expected Output: false

console.log(or(false, true));
// Expected Output: false

console.log(or(false, false));
// Expected Output: true

console.log(or());
// Expected Output: true

console.log(or(1, "lazykit"));
// Expected Output: false
