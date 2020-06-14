// Using Loop, If, Math, Substring
let stringArr = ",Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf,"

function randomArray(arrAmount, indexAmount) {
  let result = []
  let newStringArr = stringArr
  let i = 10
  while(result.length != arrAmount) {
    let random = Math.floor(Math.random() * i)
    let wordLength = 0, j = 0, count = 0, word = '', str = '', firstIndex = 0
    let condition = false
    while(wordLength != indexAmount) {
      if(newStringArr[j] === ',') {
        if(random === count) {
          firstIndex = j
          condition = true
        } else {
          count++
          condition = false
        }
      }

      if(condition && newStringArr[j] !== ',') {
        str += newStringArr[j]
        if(newStringArr[j+1] === ',') {
          wordLength++
          word += str
          if(wordLength !== indexAmount) {
            word += ' '
          }
          newStringArr = newStringArr.substring(0, firstIndex) + newStringArr.substring(j+1, newStringArr.length)
          str = '', j = 0, count = 0
          i = i - 1
          random = Math.floor(Math.random() * i)
          condition = false
        } else {
          j++
        }
      } else {
        j++
      }
    }
    result[result.length] = word
  }
  return result
}

console.log(randomArray(2, 3))

// * Buatlah sebuah fungsi random data array yang memiliki 2 parameter
// yang datanya di dapat dari string yang telah di sediakan
// - parameter 1 jumlah index array
// - parameter 2 jumlah data dalam 1 index
// stringArr = ",Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf,"
// Contoh:
// randomArr(2, 3)
// - Hasil: ["Wulan Widya Cinta", "Raharjo Kusuma Indah"]

// Task
// - Dilarang menggunakan fungsi sort dari JS
// - Minimal 1 fungsi asc / desc
// - Dilarang menggunakan fungsi selain loop dan if condition hampir di semua logic
// - Dilarang memakai push() dan concat()