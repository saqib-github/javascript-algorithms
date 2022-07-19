let instructor = {
  firstName: "jelly",
  isInstructor: true,
  favoriteNumber: [1, 2, 3, 4],
};
console.log("keys", Object.keys(instructor));
console.log("entries", Object.entries(instructor));
console.log("values", Object.values(instructor));
console.log("has property", instructor.hasOwnProperty("firstName"));
// accessing with key firstName, favoriteNumber, isInstructor
