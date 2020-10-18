/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

// converts to...

const filterOutOdds = (...nums) => nums.filter(val => val %2 === 0)
// console.log(filterOutOdds(1,2,3,4,5))




const findMin = (...nums) => nums.reduce((val, nextval) => val< nextval ? val : nextval)
// console.log(findMin(1,-1))


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
// console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))


const doubleAndReturnArgs = function(arr, ...nums) {
    const numsDoubled = nums.map(num => num*2)
    return [...arr, ...numsDoubled]
}
// console.log(doubleAndReturnArgs([1,2,3],4,4))

const removeRandom = items => {
    const indx = Math.floor(Math.random()*items.length)
    return [...items.slice(0,indx), ...items.slice(indx + 1)]
}
// console.log(removeRandom([1,2,3,4]))

const extend = (arr1, arr2) => [...arr1, ...arr2]
// console.log(extend([1,2,3], [4,5,6]))

const addKeyVal = (obj, key, val) => ({...obj, [key] : val})

const testObj = {
    name: "Matthew",
    lastName: 'Landen'
}

// console.log(addKeyVal(testObj, 'age', 31))

const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}

// console.log(removeKey(testObj, 'lastName'))

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const testObj2 = {
    age: 26,
    height: `5'9"`
}

// combine(testObj, testObj2)

const update = (obj, key, val) => ({...obj, [key]:val})

console.log(update(testObj2, 'age', 31))