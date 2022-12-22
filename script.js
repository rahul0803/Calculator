let result = document.getElementById("inputText");                // whatever input user gives will b stored in 'result' variable


let calculate = (num) => {
    result.value += num;                                          // suppose 1 + 7 = 17 (will concatenate)
}                                                                 // 'result.value' is the input field


let finalResult = () => {
    try {
        result.value = eval(result.value);                       // if result.value is valid we r going 2 evaluate..'eval' is an inbuilt functn
    }
    catch (err) {
        alert("Enter a valid input");
    }
}


function allClr() {
    result.value = " ";
}


function del() {
    result.value = result.value.slice(0, -1);                    // '-1' deletes the last number..(-2 will dlt last two numbers)
}




/*

// let arr = [2, 3, 4, 5, 6, 7];
// let newArr = arr.slice(0, -1);                               // starts from 'end' incase of minus..and the negative value is inclusive
// console.log(newArr);                                         // 2, 3, 4, ,5, 6  ==> output

*/