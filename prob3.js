// array of numbers
let numbers = [12, 7, 5, 20, 33, 42, 19, 8, 10];
// let str = numbers.toString();

function oddOrEven(arr){
    let even = [];
    let odd = [];
    
    for (let i = 0; i < arr.length ; i++ ){
        if (arr[i] % 2 === 0){
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    console.log("Numbers:", numbers.join(", "));
    console.log("Even Numbers: ", even.join(", "), "| Count", even.length);
    console.log("Odd Numbers: ", odd.join(", "), "| Count", odd.length);
}

oddOrEven(numbers);

