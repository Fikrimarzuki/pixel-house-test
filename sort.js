// Using Loop, if
function sortArray(array, sortby) {
  let index = 0
  while(index != array.length) {
    let smallerType = 'number'
    let greaterType = 'string'
    let smaller = index + 1
    let greater = index
    if (sortby === 'desc') {
      smaller = index
      greater = index + 1
      // smallerType = 'string'
      // greaterType = 'number'
    }
    if(array[smaller] < array[greater] || typeof(array[smaller]) === smallerType && typeof(array[greater]) === greaterType) {
      let temp = array[smaller]
      array[smaller] = array[greater]
      array[greater] = temp
      index = 0
    } else {
      index++
    }
  }
  return array
}

function sort(data, sortby) {
  let array = []
  if(Array.isArray(data)) {
    for(let i = 0; i < data.length; i++) {
      array = [...array, data[i]]
      array = sortArray(array, sortby)
    }
  }
  if(typeof(data) === 'string') {
    const number = [0,1,2,3,4,5,6,7,8,9]
    let index = 0, str = '', i = 0
    let isNumber = false
    while(i <= data.length) {
      for(let j = 0; j < number.length; j++) {
        if(data[i] == number[j]) {
          isNumber = true
          str += data[i]
          str = Number(str)
        }
      }
      if (data[i] === ',' || i === data.length) {
        array = [...array, str]
        array = sortArray(array, sortby)
        index++
        str = ''
        isNumber = false
      } else if (!isNumber) {
        str += data[i]
      }
      i++
    }
  }
  return array
}

// If data was string
let numeric = "10,9,102,66,5421,1,0"
let string = "Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf"
let alphaNumeric = "Wulan,Raharjo,Widya,10,9,102,66,5421,1,0,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf"

// If data was already array
let numeric2 = [10, 9, 102, 66, 5421, 1, 0]
let string2 = ["Wulan", "Raharjo", "Widya", "Yuda", "Cinta", "Iskandar", "Hidayat", "Kusuma", "Indah", "Jusuf"]
let alphaNumeric2 = ["Wulan", "Raharjo", "Widya", 10, 9, 102, 66, 5421, 1, 0, "Yuda", "Cinta", "Iskandar", "Hidayat", "Kusuma", "Indah", "Jusuf"]

console.log('===== ASCENDING =====\n')
console.log(sort(numeric, 'asc') + '\n')
console.log(sort(string, 'asc') + '\n')
console.log(sort(alphaNumeric, 'asc') + '\n\n')

console.log('===== DESSCENDING =====\n')
console.log(sort(numeric2, 'desc') + '\n')
console.log(sort(string2, 'desc') + '\n')
console.log(sort(alphaNumeric2, 'desc') + '\n')


// * Buatlah sebuah fungsi custom sort untuk data di bawah ini
// Data untuk di sort
// - Numeric: 10,9,102,66,5421,1,0
// - String: Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf
// - Alphanumeric: Wulan,Raharjo,Widya,10,9,102,66,5421,1,0,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf

// Task
// - Dilarang menggunakan fungsi sort dari JS
// - Minimal 1 fungsi asc / desc
// - Dilarang menggunakan fungsi selain loop dan if condition hampir di semua logic
// - Dilarang memakai push() dan concat()