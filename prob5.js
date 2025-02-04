stud1 = [85, 93, 89, 89, 85, 92, 100, 90, 80, 100];
stud2 = [80, 90, 77, 82, 68, 98, 89, 79, 93, 100];
stud3 = [70, 68, 77, 82, 68, 65, 89, 79, 93, 70];
stud4 = [56, 50, 89, 90, 75, 50, 68, 34, 91, 19];
stud5 = [10, 30, 70, 31, 90, 20, 89, 58, 67, 21];

function getAvg(arr) {
    if(arr.length === 0) return 0;
    
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    let average = sum / arr.length;
    return average;
}

function rating(){
    
}


let avg1 = getAvg(stud1);
console.log("Grades:", stud1.join(", "), ". Grade average:", avg1);
