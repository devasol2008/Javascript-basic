// // function eith default parameter
// function print(value = "Daisy") {
//     console.log("print value", value)
// }
// print()
// // function manully
// function greet(value) {
//     console.log("hello Devanshi ", value)
// }
// // print("good morning")


// function for average 
// function ave(sub1, sub2, sub3, sub4, sub5) {
//     let result = (sub1 + sub2 + sub3 + sub4 + sub5) / 5
//     console.log(result)
// }
// ave(20, 30, 60, 50, 40)
// ave(40, 70, 80, 90, 60)

// name and result
function studentresult(name, sub1, sub2, sub3) {
    let total = ((sub1 + sub2 + sub3) / 3)

    console.log("name:", name, "|", "result:", total)
}
studentresult("Aradhana", 50, 60, 70)
studentresult("Pranita", 80, 90, 70)