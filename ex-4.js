// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
console.log(restaurants);
// Start coding here
let i = 0;
while (i < 3) {
  restaurants[i] = `Restaurant Name: ${restaurants[i]}`;
  newRestaurants.push(restaurants[i]);
  i++;
}
console.log(restaurants);
console.log(newRestaurants);
