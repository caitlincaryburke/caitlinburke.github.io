var ThirdSetofWords = 5

var words3 = new BuildArray(ThirdSetofWords)

// Use the following variables to 
// define your random words:
words3[1] = "day"
words3[2] = "moment"
words3[3] = "years"
words3[4] = "night"
words3[5] = "weeks"

console.log("hello2")
function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
	console.log(this[i])
return this
}

function PickRandomWord3(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * ThirdSetofWords)

// Display the word inside the text box
frm.WordBox3.value = words3[rnd]
console.log("this is from script 3: " + words3[rnd])
}
