// Your code here

let mapToNegativize = function(arr) {
    let newArr = []
    arr.forEach((ele) => newArr.push(-ele))
    return newArr
}

let mapToNoChange = function(arr) {
    let newArr = []
    arr.forEach((ele) => newArr.push(ele))
    return newArr
}

let mapToDouble = function(arr) {
    let newArr = []
    arr.forEach((ele) => newArr.push(ele*2))
    return newArr
}

let mapToSquare = function(arr) {
    let newArr = []
    arr.forEach((ele) => newArr.push(ele*ele))
    return newArr
}

let reduceToTotal = function(arr, start = 0) {
    let sum = start
    arr.forEach(ele => sum += ele)

    return sum
}

let reduceToAllTrue = function(arr) {
    let ans = true
    arr.forEach(function(ele) {
        if (!ele) {
            ans = false
        }})

    return ans
}

let reduceToAnyTrue = function(arr) {
    let ans = false
    arr.forEach(function(ele) {
        if (ele) {
            ans = true
        }})
    return ans
}