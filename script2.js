var SecondSetofWords = 5

var words2 = new BuildArray(SecondSetofWords)

// Use the following variables to 
// define your random words:
words2[1] = "mindfulness"
words2[2] = "approval"
words2[3] = "personality" 
words2[4] = "mind"
words2[5] = "boundaries"

console.log("hello2")
function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
	console.log(this[i])
return this
}

function PickRandomWord2(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * SecondSetofWords)

// Display the word inside the text box
frm.WordBox2.value = words2[rnd]
console.log("this is from script 2: " + words2[rnd])
}

