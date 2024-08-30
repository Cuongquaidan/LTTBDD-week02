const arrayTest = [9, 78, 13, 45, 6, 32, 87, 16]

Array.prototype.myForEach = function(callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// arrayTest.myForEach((item) => {
//     console.log(item + 1)
// })

Array.prototype.myMap = function(callback) {
    let newArr = [];
    for (i = 0; i < this.length; i++) {
        let valueTrue = callback(this[i], i, this);
        if (valueTrue) {
            newArr.push(this[i])
        }

    }
    return newArr;
}

let arrayMap = arrayTest.myMap((item) => {
    return item > 16
})

console.log(arrayMap)