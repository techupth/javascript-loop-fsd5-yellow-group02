// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i--) {
  console.log(companyName[i]);
  reversedCompanyName = reversedCompanyName + companyName[i];
}
console.log(reversedCompanyName);

// for (let charIndex in companyName) {
//   console.log((reversedCompanyName =reversedCompanyName +companyName[Number(companyName.length - 1 - charIndex)]));
//   console.log(companyName[Number(companyName.length - 1 - charIndex)])
//   }
