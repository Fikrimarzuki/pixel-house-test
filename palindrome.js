// Using Loop, if, Math, String.fromCharCode
function getRandomChar() {
  let random = Math.floor(Math.random() * 3 + 1)
  let char
  if (random === 1) {
    char = Math.random() * 10 + 48
  } else if(random === 2) {
    char = Math.random() * 26 + 65
  } else {
    char = Math.random() * 26 + 97
  }
  return String.fromCharCode(char)
}

function palindrome(number) {
  console.log(`random palindrom karakter dengan jumlah ${number} adalah `)
  let i = 0
  let range = Math.ceil(number / 2)
  let word = ''
  let lastWord = ''
  while(i != range) {
    word += getRandomChar()
    i++
  }
  if(number % 2 !== 0) range = range - 1
  for(let j = range - 1; j >= 0; j--) {
    lastWord += word[j]
  }
  return word + lastWord
}

console.log(palindrome(5) + '\n')
console.log(palindrome(6))


// * Buatlah sebuah fungsi random palindrom yang berisikan 1 parameter jumlah dari karakter palindrom tersebut
// Contoh:
// polindrom(5)
// Hasil:
// - 12f21
// - fgkgf

// Task
// - Dilarang menggunakan fungsi sort dari JS
// - Minimal 1 fungsi asc / desc
// - Dilarang menggunakan fungsi selain loop dan if condition hampir di semua logic
// - Dilarang memakai push() dan concat()