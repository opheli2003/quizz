// checking answers
/* 
=>We create an array of correct answers
*/

const correctAnswers = ["B", "B", "B", "B"];

/*=>we compare the user's answers againt the later ones 
   =>first we need to attach an event listener to the form
   to know when the user has submitted the form

   =>we wt to create a score for the user based on her answers
    =>by deflt we set it at 0
     =>then we wt to find out what the user's answers are
      =>now we can compare them to the correct answers
     */

const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
	evt.preventDefault();

	let score = 0;
	const userAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
	];

	// for (let i = 0; i < correctAnswers.length; i++)

	//     if (userAnswers[i] == correctAnswers[i]) {
	//   score+=25

	// }
	// console.log(score)
	// another version
	//=>

	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});
	console.log(score);

	// showing the score

	// const span = document.querySelector("span");

	// const resultDiv = document.querySelector(".d-none");

	// span.textContent = score;

	// resultDiv.classList.remove("d-none");

	//another version
	//=>

	/*I get a handle on the result container
      =>then I chain on it another querySelector that's gonna look for something inside the scope 
      of result
    */

	// window.scrollTo()
	scrollTo(0, 0);

	const result = document.querySelector(".result");

	// result.querySelector("span").textContent = `${score}%`;

	result.classList.remove("d-none");

	let output = 0;

	const timer = setInterval(() => {
		result.querySelector("span").textContent = `${output}%`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	}, 10);
});

// find a way to automatically scroll to the top when the user submits
// =>we have to use a method stored on the window object
// =scrollTo
//2 arguments: x and y coordinates

console.log("hello");
/*
this console is stored on the window object
this is the same as saying
=> 
*/

window.console.log("hello");

console.log(document.querySelector("form"));
/*window is inferred bc window is the global object, and document is stored on that
 */

console.log(window.document.querySelector("form"));

// alert("something")

// window.alert('something')
/*the alert function is stored on the window object
 */

/*=>Whenever you see any kind of method or property directly,
  they are ultimately stored on the window object
*/

/*setTimeout method takes a clbck function and fires this fction
  after a certain amount of time.
  we specify that amount of time as a second argument of the method
=>when the page loads it'll wait for 3 seconds and then perform this clback
  thats also a method on the window object  
*/

// setTimeout(() => {
// 	alert("back from Dundee");
// }, 3000);

// to animate the score(from 0 to the score) very quickly when the user clicks on submit
//=>setInterval = method stored on the window object

/*setInterval = similar to setTimeout
  but here the clbck fires at every amount of time 
*/

// setInterval(() => {
// 	console.log("hello");
// }, 3000);

// to stop the interval

/* -everytime the clbck fction is fired
=>it increases i by 1
   -if i = 5 we wt to stop the interval
    =>I store the setInterval fction in a variable
     =>clearInterval will stop the interval from firing again
	*/

// let i = 0;

// const timer = setInterval(() => {
// 	console.log("hello");
// 	i++;
// 	if (i === 5) {
// 		clearInterval(timer);
// 	}
// }, 3000);
