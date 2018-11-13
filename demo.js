//alert("hello world");


function  enterNum() {
	var number =  document.getElementById("text-box-3").value;
		if(number==1){
 			alert("you won a lambourghini");
}
		else if(number==2){
 			alert("You Won a trip to vegas");
		}
		else if(number==3){
			alert("you won a brand new house");
		}
}
function  addNum() {
	var firstNum =  $('#text-box-1').value,
		SecondNum = document.getElementById("text-box-2").value;

		document.getElementById("result").innerHTML = (parseInt(FirstNum) + parseInt(SecondNum));



	 		 }


 	 var Danny = {firstName:"danny", lastName: "papish", birthday: "05/10/1987", hobbies:"bars,movies,sports"};
 		console.log("Danny");

function someName(numberOne, otherNumber){
	return numberOne + otherNumber;
}
console.log(someName(4, 14));

if(someName>10){
 console.log("But you'll definitely see this");
}
else{
 console.log("You will see this though, since 5 < 10 evaluates to false");
}

for
(var i =
0; i<5; i++){
 console.log(i) }
 beers = ["Jake", "John", "Samantha", "Billy"]
for(var i = 0; i< beers.length; i++){
 console.log(beers[i], "is my friend")
}
x = 100
while(x > 0){
 console.log(x , "Bottles of beer on the wall")
 x--;
}
x = 5
y = 6
function addIttion (x , y) {
	return x + y
}
console.log(addIttion(x , y));

for(var i=1; i<50; i++) {

	if (i % 3===0 & i%5===0) {
		console.log("fizzBuzz")
	}
	else if ( i % 3 === 0) {
		console.log("fizz");
	}
	else if (i % 5 === 0) {
		console.log("Buzz")
	}
	else {
		console.log(i);
	}
};