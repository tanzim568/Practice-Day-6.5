// let array = "xoss,vai SEI";
// let cost = array.split(",");
// const regex = /[0-9]/g;
// let living_cost = Number(cost[cost.length - 1]);
// let newar=[]
// console.log(living_cost);
// for (let i = 0; i < cost.length; i++)
// {
//     num = Number(cost[i])
//     newar.push(num)
// }
// console.log(newar)
// console.log(typeof (newArray[2]));
// console.log(newArray)
// newArray.forEach((currentValue,index,arr) => {
//     console.log(currentValue,index)
// })

// for (let i = 0; i < cost.length; i++)
// {
//     console.log( (cost[i]))
// }



let array = window.prompt("Enter your items,living cost !")
if (array[0] == "[") {
    const newArray = array.match(/[0-9]+/g).map(Number);
    let total_income = 0;
    let total_tax = 0;

    for (let i = 0; i < newArray.length - 1; i++) {
      total_income += newArray[i];
      if (newArray[i] >= 3000) {
        let tax = (newArray[i] * 20) / 100;
        total_tax += tax;
      }
    }
    total_cost = total_tax + newArray[newArray.length - 1];
    let savings = total_income - total_cost;
    if (savings < 0) {
      console.log("earn more");
    } else {
      console.log(savings);
    }

}
else {
    console.log("Invalid Input")
}