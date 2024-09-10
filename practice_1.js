// const userInput = reqire("Please enter your marks :")

// if (userInput >= 0 && userInput <= 33)
// {
//     console.log("Fail")
// }
// else if (userInput > 33 && userInput < 40)
// {
//     console.log("D")
// }
// const prompt = require("prompt-sync")();

const userInput = Number(prompt("Please enter your marks: "));

if (userInput >= 0 && userInput <= 33) {
  console.log("Fail");
}
else if (userInput > 34 && userInput <= 40)
{
  console.log("D");
}
else if (userInput >= 41 && userInput <= 60)
{
  console.log("C");
}
else if (userInput >= 61 && userInput <= 70)
{
  console.log("B");
}
else if (userInput >= 71 && userInput <= 79)
{
  console.log("A");
}
else if (userInput >= 80 && userInput <= 100)
{
  console.log("A+");
}


// const userInput = Number(prompt("Please enter your marks :"));

// if (userInput >= 0 && userInput <= 33) {
//   console.log("Fail");
// } else if (userInput > 33 && userInput < 40) {
//   console.log("D");
// }


