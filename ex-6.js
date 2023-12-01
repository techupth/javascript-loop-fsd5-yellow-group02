// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// ข้อนี้ผมทำโดยใช้ Chat GPT ช่วยครับ //

for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName = reversedCompanyName + companyName[i];
}

console.log(reversedCompanyName);
