const arrayTest = [9, 78, 13, 45, 6, 32, 87, 16];

Array.prototype.myForEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// arrayTest.myForEach((item) => {
//     console.log(item + 1)
// })

Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (i = 0; i < this.length; i++) {
        let valueTrue = callback(this[i], i, this);
        if (valueTrue) {
            if (valueTrue === true) newArr.push(this[i]);
            else {
                newArr.push(valueTrue);
            }
        }
    }
    return newArr;
};

let arrayMap = arrayTest.myMap((item) => {
    return item > 16;
});

// console.log(arrayMap);

Array.prototype.myFlatMap = function (callback) {
    let newArr = [];
    for (i = 0; i < this.length; i++) {
        let valueTrue = callback(this[i], i, this);
        if (valueTrue) {
            if (valueTrue === true) newArr.push(this[i]);
            else {
                newArr = newArr.concat(valueTrue);
            }
        }
    }
    return newArr;
};
let arrayFlatMap = arrayTest.myFlatMap((x) => [2 * x]);
// console.log(arrayFlatMap);

Array.prototype.myFilter = function (callback) {
    let newArr = [];
    for (i = 0; i < this.length; i++) {
        let valueTrue = callback(this[i], i, this);
        if (valueTrue) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

let arrayFilter = arrayTest.myFilter((item) => {
    return item + 16;
});

console.log(arrayFilter);
