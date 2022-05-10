let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function find(arr, i, j, even, odd) {
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             even[i] = element;
//             i = i + 1;
//         } else {
//             odd[j] = element;
//             j = j + 1;
//         }
//     });
// }
// let even = [];
// let odd = [];
// find(arr, 0, 0, even, odd)

// console.log(even);
// console.log(odd);


// function leapYear(year) {
//     if (year % 400 == 0) {
//         console.log("is a leap year: " + year);
//     } else if (year % 100 == 0) {
//         console.log("is not a leap year: " + year);
//     } else if (year % 4 == 0) {
//         console.log("is a leap year: " + year);
//     } else {
//         console.log("is not a leap year: " + year);
//     }

// }

// leapYear(2022)

// function primeNumber(boundary) {
//     let arr = []
//     for (let number = 2; number <= boundary; number++) {
//         let count = 0
//         for (let i = 1; i <= number; i++) {
//             if (number < 2) {
//                 return false;
//             }
//             if (number % i == 0) {
//                 count++
//             }
//             if (count > 2) {
//                 continue;
//             }
//         }
//         if (count === 2) {
//             arr.push(number)
//         }
//     }
//     return arr
// }

// let res = primeNumber(10)
// console.log(res);

function vowelWords(str) {
    let count = 0;
    let arr = str.toLowerCase().split("")
    arr.forEach(element => {
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            count++;
        }
    });
    return count
}

// let res = vowelWords("aeiou");
// console.log(res);


let profile = {
    name: "kamlesh"
}

Object.defineProperty(profile, "age", {
    value: 3,
    writable: false
})

profile.name = "sonal"
profile.age = 4

// console.log(profile);
// console.log(profile);
// console.log(profile);

let arr1 = [1, 2, 3, 4, 5];
let smallestNumber = arr[0];

for (let index = 0; index < arr1.length; index++) {
    if (smallestNumber < arr1[index]) {
        smallestNumber = arr1[index]
    }
}

// console.log(smallestNumber);

function RPS(player1, player2) {

    switch (player1) {
        case player2:
            if (player1 === player2) {
                console.log("DRAW");
            }
            break;
        case "rock":
            if (player2 === "scissor") {
                console.log("player 1 wins");
            } else {
                console.log("player 2 wins");
            }
            break;
        case "paper":
            if (player2 === "paper") {
                console.log("player 1 wins");
            } else {
                console.log("player 2 wins");
            }
            break;
        case "scissor":
            if (player2 === "rock") {
                console.log("player 1 wins");
            } else {
                console.log("player 2 wins");
            }
            break;
    }
}

// RPS("rock", "rock")

Obj = {
    "x": {
        "y": 100
    },
    "abc": "Somtimes",
    "tab": {
        "uvw": {
            "pqr": {
                "wcd": "hello",
                "got": 10
            }
        }
    }

}

// function obj111(data, index, Obj) {
//     let dataArr = data.split(".");
//     let value = Obj[dataArr[index]];
//     index++;
//     if (index === dataArr.length) {
//         return value
//     }
//     return obj111(data, index, value);
// }

// console.log(obj111("tab.uvw.pqr.got", 0, Obj));

let obj = {
    name: "kamlesh",
    data: {
        skills: {
            primary: "HTML",
            secondary: {
                type: "HTML"
            }
        }
    }
}

function fn(obj, parent, res = {}) {
    for (let key in obj) {
        let pro = parent ? parent + "_" + key : key;
        if (typeof (obj[key]) === "object") {
            fn(obj[key], pro, res)
        } else {
            res[pro] = obj[key]
        }
    }
    return res
}

// let res = fn(obj)
// console.log(res);







// function flatternObject(obj, parent, res = {}) {
//     for (let key in obj) {
//         let propName = parent ? parent + "_" + key : key;
//         if (typeof (obj[key]) === "object") {
//             flatternObject(obj[key], propName, res)
//         } else {
//             res[propName] = obj[key]
//         }
//     }
//     return res
// }

// let res = flatternObject(obj)
// console.log(res);

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log("run after 3 seconds"))