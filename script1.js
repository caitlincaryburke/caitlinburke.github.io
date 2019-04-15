var NumberOfWords = 5

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words [1] = "Dream"
words [2] = "Path"
words [3] = "Destiny"
words [4] = "Clarity"
words [5] = "Authenticity"

console.log("hello")
function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
console.log(this[i])
return this
}

function PickRandomWord1(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox1.value = words [rnd]
console.log("this is from script 1: " + words[rnd])
}

