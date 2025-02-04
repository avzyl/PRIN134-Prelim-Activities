// txt
let str = "Hello World";
// let str = numbers.toString();

function toHash(){
    let newStr = '';
    let changedLetters = [];
    
    for (let i = 0; i < str.length ; i++ ){
        if (i % 2 === 0){
            newStr += '*';
            changedLetters.push(str[i]);
        } else {
            newStr += (str[i]);
        }
    }

    console.log("Input String:", str);
    console.log("Output String:", newStr);
    console.log("Hash Characters:", changedLetters.join(','));
}

toHash(str);
